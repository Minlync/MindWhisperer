/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 10px 5px rgba(84, 26, 133, 0.7)',
      }
    },
  },
  plugins: [],
}

