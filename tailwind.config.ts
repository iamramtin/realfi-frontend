// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
        },
        gold: {
          600: '#ede988',
          700: '#edd188',
        },
        yellow: {
          100: '#fffadd',
          600: '#ffde59',
        },
      },
    },
  },
  plugins: [],
}
