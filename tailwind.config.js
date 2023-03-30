/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'start-bg': "url('/images/start/background.gif')"
      },
      fontFamily: {
        'sofia': ['Sofia Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}