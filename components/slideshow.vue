<script setup>
import { computed } from 'vue';

const props = defineProps({
  images: Array,
});

// Duplicate images to ensure smooth transition
const duplicatedImages = computed(() => [...props.images, ...props.images]);

// Always set the image height to 100% of the parent container
const imageStyle = { height: '100%', width: 'auto' };
</script>





<template>
  <div class="marquee-container">
    <div class="marquee">
      <div v-for="(image, i) in duplicatedImages" :key="i" class="img1">
        <nuxt-img :src="image" :style="imageStyle" class="user-image" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  height: 100%; /* Ensure the container inherits height from the parent */
}

.marquee {
  display: inline-block;
  animation: marquee-pingpong 100s linear infinite;
}

@keyframes marquee-pingpong {
  0% { transform: translateX(0); }
  25% { transform: translateX(-25%); }
  50% { transform: translateX(-50%); }
  75% { transform: translateX(-25%); }
  100% { transform: translateX(0); }
}

.img1 {
  display: inline-block;
  margin-right: 3px;
}

.user-image {
  object-fit: cover;
  transition: transform 0.3s ease;
  height: 250px !important;
  width: auto; /* Maintain aspect ratio */
}



@media (max-width: 768px) {
  .img1 {
    margin-right: 2px;
  }
  .marquee-container{
    padding-top:5px !important;
  }
}

@media (max-width: 480px) {
  .img1 {
    margin-right: 1px;
  }

}
</style>
