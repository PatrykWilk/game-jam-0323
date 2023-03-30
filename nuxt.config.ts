export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Tower of Doom'
    }
  }
})
