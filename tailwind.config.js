/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rubik: ['Bitcount', 'sans-serif'],
    },
  },
 plugins: [require("tailwind-scrollbar-hide")],
};
