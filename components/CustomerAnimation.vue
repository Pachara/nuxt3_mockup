<script setup>
import animationData from '@/assets/animate.json'
import animationData2 from '@/assets/animate2.json'

const animationContainer = ref(null)
let animation = null
const { $lottie } = useNuxtApp()

onMounted(() => {
  animation = $lottie.loadAnimation({
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

<template>
  <div ref="animationContainer" class="w-100 h-100"></div>
</template>


