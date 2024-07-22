import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('Splide', Splide);
  nuxtApp.provide('AutoScroll', AutoScroll);
});
