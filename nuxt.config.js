export default defineNuxtConfig({
  // target: 'static',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/globals.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: ['@vueuse/motion/nuxt'],
  meta: {
    title: 'Villager Bot',
  },
  head: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/villager-bot.webp' }],
  },
})
