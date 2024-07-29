// plugins/lottie.client.js
import { defineNuxtPlugin } from '#app'
import lottie from 'lottie-web'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('lottie', lottie)
})
