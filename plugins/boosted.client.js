import boosted from 'boosted/dist/js/boosted.bundle';
export default defineNuxtPlugin({
  name : 'Boosted',
  async setup (nuxtApp){
       nuxtApp.provide('bootstrap', boosted);
  },
})


     


     
    