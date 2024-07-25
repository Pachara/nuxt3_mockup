const isDev = process.env.NODE_ENV === 'development'
const devHost = 'http://localhost:3000'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      trailingSlash: false,
      baseURL: isDev ? devHost : "https://mockup-a0p.pages.dev",
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },

  experimental: {
    payloadExtraction: true,
  },

  delayHydration: {
    mode: 'init'
  },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/custom.css',
    '@/assets/scss/main.scss',
    '@/assets/css/blobz.min.css',
    '@/assets/css/car_animate.css',
    '@splidejs/splide/css'
  ],

  modules: ["@nuxt/image", "@nuxtjs/google-fonts", "nuxt-delay-hydration"],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dixuugvyv/image/fetch/'
    },
    screens: {
      xs: 320,      // Bootstrap's xs is <576px, customize as needed
      sm: 576,      // Bootstrap's sm is 576px and up
      md: 768,      // Bootstrap's md is 768px and up
      lg: 992,      // Bootstrap's lg is 992px and up
      xl: 1200,     // Bootstrap's xl is 1200px and up
      xxl: 1400    // Bootstrap's xxl is 1400px and up
    },
    domains: ['mockup-a0p.pages.dev'],
    format: ['webp'],
    provider: 'cloudinary'
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