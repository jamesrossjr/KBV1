// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    manifest: {
      name: 'kbv1',
      short_name: 'kbv1',
      lang: 'en',
    },
  }
})