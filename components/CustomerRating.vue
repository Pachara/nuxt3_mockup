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
            <p class="animation-card_content_city">{{ item.city }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'

const { $gsap } = useNuxtApp()

const sliderItems = ref([
  { image: 'https://res.cloudinary.com/dixuugvyv/image/fetch/f_auto,q_auto/https://randomuser.me/api/portraits/thumb/men/82.jpg', title: 'Charlize Theron 1', description: 'With no contractual commitments comes the freedom of having top notch content created whenever.', city: 'New York, NY' },
  { image: 'https://res.cloudinary.com/dixuugvyv/image/fetch/f_auto,q_auto/https://randomuser.me/api/portraits/thumb/men/82.jpg', title: 'Charlize Theron 2', description: 'With no contractual commitments comes the freedom of having top notch content created whenever.', city: 'New York, NY' },
  { image: 'https://res.cloudinary.com/dixuugvyv/image/fetch/f_auto,q_auto/https://randomuser.me/api/portraits/thumb/men/82.jpg', title: 'Charlize Theron 3', description: 'With no contractual commitments comes the freedom of having top notch content created whenever.', city: 'New York, NY' },
  { image: 'https://res.cloudinary.com/dixuugvyv/image/fetch/f_auto,q_auto/https://randomuser.me/api/portraits/thumb/men/82.jpg', title: 'Charlize Theron 4', description: 'With no contractual commitments comes the freedom of having top notch content created whenever.', city: 'New York, NY' },
  { image: 'https://res.cloudinary.com/dixuugvyv/image/fetch/f_auto,q_auto/https://randomuser.me/api/portraits/thumb/men/82.jpg', title: 'Charlize Theron 5', description: 'With no contractual commitments comes the freedom of having top notch content created whenever.', city: 'New York, NY' }
])

const sliderItemRefs = ref([])

const config = reactive({
  gap: 12,
  activeSliderMargin: 65
})

onMounted(() => {
  startAnim()
})

function startAnim() {
  if (sliderItemRefs.value.length >= 4) {
    $gsap.fromTo(sliderItemRefs.value[0], 
      { xPercent: 0, yPercent: 0, opacity: 0.75 },
      { xPercent: 0, yPercent: -config.gap, opacity: 0, zIndex: 0, delay: 0.03, ease: "cubic.inOut", onComplete: sortArray }
    )
    $gsap.fromTo(sliderItemRefs.value[1],
      { xPercent: config.gap, yPercent: config.activeSliderMargin, opacity: 1, zIndex: 1 },
      { xPercent: 0, yPercent: 0, opacity: 0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: "cubic.inOut" }
    )
    $gsap.to(sliderItemRefs.value[2], {
      motionPath: { path: [{ xPercent: 0, yPercent: config.activeSliderMargin * 2 }, { xPercent: config.gap - 2, yPercent: config.activeSliderMargin + 38 }, { xPercent: config.gap, yPercent: config.activeSliderMargin }] },
      boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
      zIndex: 1,
      opacity: 1,
      ease: "cubic.inOut",
      duration: 0.5
    })
    $gsap.fromTo(sliderItemRefs.value[3],
      { xPercent: 0, yPercent: config.activeSliderMargin * 3, opacity: 0, zIndex: 0 },
      { xPercent: 0, yPercent: config.activeSliderMargin * 2, opacity: 0.75, zIndex: 0, ease: "cubic.inOut" }
    )
  } else {
    console.error('Carousel should contain more than 3 slides')
  }
}

function sortArray() {
  setTimeout(() => {
    sliderItems.value.push(sliderItems.value.shift())
    startAnim()
  }, 3000)
}
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-wrap {
  position: relative;
  width: 100%;
  max-width: 430px;
  height: 320px;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.slider-item {
  width: 100%;
  max-width: 430px;
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
</style>