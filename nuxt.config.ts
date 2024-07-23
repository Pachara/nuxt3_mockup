// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/custom.css',
    '@/assets/scss/main.scss',
    '@/assets/css/blobz.min.css',
    '@/assets/css/car_animate.css',
    '@splidejs/splide/css'
  ],

  modules: ["@nuxt/image", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Kanit: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Sriracha: true  // Include all necessary weights
    },
    download: false,  // Use fonts from CDN
    inject: true,
    display: 'swap'
  }
})