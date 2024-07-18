import boosted from 'boosted/dist/js/boosted.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css'
export default defineNuxtPlugin({
  name : 'Boosted',
  async setup (nuxtApp){
       nuxtApp.provide('bootstrap', boosted);
  },
})


     


     
    