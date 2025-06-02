module.exports = {
  darkMode: 'class', // use class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // adjust as needed
  ],
  theme: {
    extend: {
      screens: {
        'a': '900px',
        'b': '700px',
        'c': '500px',
        'd': '300px',
      },
    },
  },
  plugins: [],
}