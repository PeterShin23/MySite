/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        transitionTimingFunction: {
          'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
  },
  plugins: [],
}

