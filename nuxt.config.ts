export default defineNuxtConfig({
  target: 'static',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/globals.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: ['@vueuse/motion/nuxt'],
  head: {
    title: 'Villager Bot',
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },
})
