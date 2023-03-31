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
        'initial': "url('/images/initial.png')",
        'knight': "url('/images/player/knight.png')",
        'knight-hover': "url('/images/player/knight.gif')",
        'knight-alt': "url('/images/player/knight2.png')",
        'knight-alt-hover': "url('/images/player/knight2.gif')"
      },
      fontFamily: {
        'sofia': ['Sofia Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}