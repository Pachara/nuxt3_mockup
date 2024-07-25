import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


// Register all necessary plugins
gsap.registerPlugin(CSSPlugin,MotionPathPlugin)


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap)
})