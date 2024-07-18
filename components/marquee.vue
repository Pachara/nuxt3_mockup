<script setup>
import { computed } from 'vue';

const props = defineProps({
  images: Array,
});

// Duplicate images to ensure smooth transition
const duplicatedImages = computed(() => [...props.images, ...props.images]);
</script>

<template>
  <div class="marquee-container rounded-5 border" style="border:1px solid #ddd !important">
    <div class="marquee">
      <div v-for="(image, i) in duplicatedImages" :key="i" class="img1">
        <nuxt-img :src="image" class="rounded-circle border user-image" />
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
  width: 35px;
  height: 35px;
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

  .img1 {
    margin-right: 2px;
  }
}

@media (max-width: 480px) {
  .user-image {
    width: 30px;
    height: 30px;
  }

  .img1 {
    margin-right: 1px;
  }
}
</style>