const villagerBotDescription =
  'Economy, utility, fun, Minecraft, and MORE! You name it? We got it! We have multi-language support too! Español! Français, Português!'
const villagerBotUrl = 'https://villagerbot.com/'
const villagerBotIconUrl = 'https://villagerbot.com/villager-bot.webp'

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
  app: {
    head: {
      title: 'Villager Bot',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        /* meta for embeds in Discord or Facebook */
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Villager Bot' },
        { property: 'og:description', content: villagerBotDescription },
        { property: 'og:url', content: villagerBotUrl },
        { property: 'og:image', content: villagerBotIconUrl },
        /* meta for embeds in twitter */
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Villager Bot' },
        { name: 'twitter:description', content: villagerBotDescription },
        { name: 'twitter:url', content: villagerBotUrl },
        { name: 'twitter:image', content: villagerBotIconUrl },
      ],
    },
  },
})
