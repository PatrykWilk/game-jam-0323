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
        'knight-alt-hover': "url('/images/player/knight2.gif')",
        'stage-one': "url('/images/levels/stage1.png')",
        'stage-two': "url('/images/levels/stage2.png')",
        'stage-three': "url('/images/levels/stage3.png')",
        'stage-four': "url('/images/levels/stage4.png')",
        'stage-five': "url('/images/levels/stage5.png')",
        'enemy-spider': "url('/images/enemies/giant-spider.png')",
        'enemy-minotaur': "url('/images/enemies/minotaur.png')",
        'enemy-banshee': "url('/images/enemies/banshee.png')",
        'enemy-medusa': "url('/images/enemies/medusa.png')",
        'enemy-souleater': "url('/images/enemies/souleater.png')"
      },
      fontFamily: {
        'sofia': ['Sofia Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}