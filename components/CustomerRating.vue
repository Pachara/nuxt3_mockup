<template>
  <div class="slider-container">
    <div class="slider-wrap">
      <div id="card-slider" class="slider">
        <div v-for="(item, index) in sliderItems" :key="index" :ref="el => { if (el) sliderItemRefs[index] = el }" class="slider-item">
          <div class="animation-card_image">
            <img :src="item.image" alt="">
          </div>
          <div class="animation-card_content">
            <p class="animation-card_content_description p-2 pt-0">{{ item.description }}</p>
            <p class="animation-card_content_city d-md-block d-none">{{ item.city }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed } from 'vue'

const { $gsap } = useNuxtApp()

const sliderItems = ref([
  { image: 'https://res.cloudinary.com/dixuugvyv/image/fetch/f_auto,q_auto/https://randomuser.me/api/portraits/thumb/men/81.jpg', title: 'Charlize Theron 1', description: 'With no contractual commitments comes the freedom of having top notch content created whenever.', city: 'New York, NY' },
  { image: 'https://res.cloudinary.com/dixuugvyv/image/fetch/f_auto,q_auto/https://randomuser.me/api/portraits/thumb/men/82.jpg', title: 'Charlize Theron 2', description: 'With no contractual commitments comes the freedom of having top notch content created whenever.', city: 'New York, NY' },
  { image: 'https://res.cloudinary.com/dixuugvyv/image/fetch/f_auto,q_auto/https://randomuser.me/api/portraits/thumb/men/83.jpg', title: 'Charlize Theron 3', description: 'With no contractual commitments comes the freedom of having top notch content created whenever.', city: 'New York, NY' },
  { image: 'https://res.cloudinary.com/dixuugvyv/image/fetch/f_auto,q_auto/https://randomuser.me/api/portraits/thumb/men/84.jpg', title: 'Charlize Theron 4', description: 'With no contractual commitments comes the freedom of having top notch content created whenever.', city: 'New York, NY' },
  { image: 'https://res.cloudinary.com/dixuugvyv/image/fetch/f_auto,q_auto/https://randomuser.me/api/portraits/thumb/men/85.jpg', title: 'Charlize Theron 5', description: 'With no contractual commitments comes the freedom of having top notch content created whenever.', city: 'New York, NY' }
])

const sliderItemRefs = ref([])

const config = reactive({
  gap: 5,
  activeSliderMargin: 65,
  activeSliderHeight: 130,
  normalSliderHeight: 130
})

const activeSliderOffset = computed(() => (config.activeSliderHeight - config.normalSliderHeight) / 2)

onMounted(() => {
  startAnim()
})

function startAnim() {
  if (sliderItemRefs.value.length >= 4) {
    // Set initial positions for all five items
    $gsap.set(sliderItemRefs.value[0], { xPercent: 0, yPercent: -config.gap, opacity: 0, zIndex: 0, height: config.normalSliderHeight })
    $gsap.set(sliderItemRefs.value[1], { xPercent: 0, yPercent: 0, opacity: 0.75, zIndex: 1, height: config.normalSliderHeight, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)' })
    $gsap.set(sliderItemRefs.value[2], { xPercent: config.gap * 2, yPercent: config.activeSliderMargin - activeSliderOffset.value, opacity: 1, zIndex: 1, height: config.activeSliderHeight, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)' })
    $gsap.set(sliderItemRefs.value[3], { xPercent: 0, yPercent: config.activeSliderMargin * 2, opacity: 0.75, zIndex: 0, height: config.normalSliderHeight })
    $gsap.set(sliderItemRefs.value[4], { xPercent: 0, yPercent: 400, opacity: 0, zIndex: 0, height: config.normalSliderHeight })

    const tl = $gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          sortArray(sliderItems.value)
          startAnim()
        }, 3000) // Wait for 3 seconds before starting the next animation
      }
    })

    // Animate item 0 to move up and fade out Part 1
    tl.fromTo(sliderItemRefs.value[0], 0.5, { xPercent: 0, yPercent: 0, opacity: 0.75 }, { xPercent: 0, yPercent: -120, opacity: 0, zIndex: 0, ease: "cubic.inOut" }, 0)

    // Animate item 1 to move to item 0's position Part 2
    tl.fromTo(sliderItemRefs.value[1], 0.5, { xPercent: 0, yPercent: 0, opacity: 0.75, zIndex: 1 }, { xPercent: 0, yPercent: -config.gap, opacity: 0, zIndex: 0, ease: "cubic.inOut" }, 0)

    // Animate item 2 to move to item 1's position Part 3
    tl.fromTo(sliderItemRefs.value[2], 0.5, { xPercent: config.gap * 2, yPercent: config.activeSliderMargin - activeSliderOffset.value, opacity: 1, zIndex: 1 }, { xPercent: 0, yPercent: 0, opacity: 0.75, zIndex: 1, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: "cubic.inOut" }, 0)

    // Animate item 3 to move to item 2's position Part 4
    tl.fromTo(sliderItemRefs.value[3], 0.5, { xPercent: 0, yPercent: config.activeSliderMargin * 2, opacity: 0.75, zIndex: 0 }, { xPercent: config.gap * 2, yPercent: config.activeSliderMargin - activeSliderOffset.value, opacity: 1, zIndex: 1, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: "cubic.inOut" }, 0)

    // Animate item 4 to move to item 3's position Part 5
    tl.fromTo(sliderItemRefs.value[4], 0.5, { xPercent: 0, yPercent: 300, opacity: 0, zIndex: 0 }, { xPercent: 0, yPercent: config.activeSliderMargin * 2, opacity: 0.75, zIndex: 0, ease: "cubic.inOut" }, 0)

    // Animate item 0 to fade out and item 4 to come in smoothly
    tl.fromTo(sliderItemRefs.value[4], 0.5, { yPercent: 300, opacity: 0 }, { yPercent: config.activeSliderMargin * 2, opacity: 0.75, ease: "cubic.inOut" }, 0)
    
  } else {
    console.error('Carousel should contain at least 4 slides')
  }
}

function sortArray(array) {
  const firstElem = array.shift()
  array.push(firstElem)
}








</script>




<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-wrap {
  position: relative;
  width: 100%;
  max-width: 430px;
  height: 380px;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 40px;
  left: 0;
}

.slider-item {
  width: 100%;
  max-width: 385px;
  padding: 10px 0 12px 15px;
  border-radius: 10px;
  background-color: #F1EFE7;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  opacity: 0;
  z-index: 0;
  box-shadow: 0 4px 9px #f1f1f4;
  left: 0;
  top: 0;
  transition: height 0.5s ease, opacity 0.5s ease;
}

.animation-card_image {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 4px 9px rgba(241, 241, 244, 0.72);
  background-color: #ffffff;
}

.animation-card_image img {
  width: 53px;
  height: 53px;
  border-radius: 50%;
  object-fit: cover;
}

.animation-card_content {
  flex-grow: 1;
  max-width: calc(100% - 86px);
  margin-left: 26px;
  font-family: "Open Sans", sans-serif;
}

.animation-card_content_description {
  color: #696d74;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: normal;
  line-height: 24px;
  margin: 0px 0 0 0;
}

.animation-card_content_city {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #696d74;
  margin: 10px 0 0 0;
}

@media (max-width: 768px) {
  .slider-item {
    padding: 15px;
  }

  .animation-card_content {
    margin-left: 15px;
  }

  .animation-card_content_description {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .slider-item {
  max-width: 310px;
  }
  .animation-card_content_description {
  line-height: 20px;
}
  }



</style>