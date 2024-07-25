<template>
    <div ref="animationContainer" class="lottie-container"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import lottie from 'lottie-web'
  
  // Import your JSON animation file
  import animationData from '@/assets/animate.json'
  
  const animationContainer = ref(null)
  let animation = null
  
  onMounted(() => {
    animation = lottie.loadAnimation({
      container: animationContainer.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    })
  })
  
  onUnmounted(() => {
    if (animation) {
      animation.destroy()
    }
  })
  </script>
  
  <style scoped>
  .lottie-container {
    width: 100%;
    height: 300px; /* Adjust as needed */
  }
  </style>