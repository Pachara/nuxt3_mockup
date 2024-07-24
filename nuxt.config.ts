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
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dixuugvyv/image/fetch/',
    },
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    sizes: {
      'xs': '100vw',
      'sm': '50vw',
      'md': '50vw',
      'lg': '33vw',
      'xl': '33vw',
      'xxl': '33vw',
      '2xl': '33vw'
    }
  },

  googleFonts: {
    families: {
      Kanit: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Sriracha: true  
    },
    download: false, 
    inject: true,
    display: 'swap'
  }
})