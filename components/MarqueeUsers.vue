<script setup>
import { computed } from 'vue';

const props = defineProps({
  images: Array,
  responsive: Boolean,
});

// Duplicate images to ensure smooth transition
const duplicatedImages = computed(() => [...props.images, ...props.images]);

// Compute image style based on responsive prop
const imageStyle = computed(() => {
  return props.responsive ? { height: '100%' } : { width: '35px', height: '35px' };
});
</script>



<template>
  <div class="marquee-container rounded-5 border" style="border:1px solid #ddd !important">
    <div class="marquee">
      <div v-for="(image, i) in duplicatedImages" :key="i" class="img1">
        <nuxt-img :src="image" :style="imageStyle" class="rounded-circle border user-image" />
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
}

.marquee {
  display: inline-block;
  animation: marquee-pingpong 20s linear infinite;
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
}

.user-image:hover {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .user-image {
    width: 40px;
    height: 40px;
  }

  .user-image.responsive {
    height: 100%;
    width: auto; /* Maintain aspect ratio */
  }

  .img1 {
    margin-right: 2px;
  }
  .marquee-container {
    margin-top:5px;
  }
}

@media (max-width: 480px) {
  .user-image {
    width: 30px;
    height: 30px;
  }

  .user-image.responsive {
    height: 100%;
    width: auto; /* Maintain aspect ratio */
  }

  .img1 {
    margin-right: 1px;
  }
  .marquee-container {
    margin-top:10px;
  }
}
</style>
