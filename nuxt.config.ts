// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },


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
      baseURL: 'https://res.cloudinary.com/dixuugvyv/image/upload/' // Replace dixuugvyv with your actual Cloudinary cloud name
    },
    domains: ['res.cloudinary.com'], // Add Cloudinary's domain to the allowed list
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 80,
        }
      }
    }
  }

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