/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    colors: {
      'white': '#ffffff',
      'black': '#1A1A1A',
      'red': '#FF0000',
      'gray': '#667085',
      'light-gray': '#EAECF0',
      'white-gray': '#C0C5D0',
      'violet': '#6941C6',
      'orange': '#C4320A',
      'light-orange': '#FFF6ED',
    }
  },
  darkMode: 'selector',
};
