<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const splide = ref(null);
const isLoading = ref(true);
const loadedImages = ref([]);
const splideInitialized = ref(false);

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = reject;
  });
}

 const preloadAllImages = async () => {
  try {
    const promises = props.images.map(preloadImage);
    loadedImages.value = await Promise.all(promises);
    isLoading.value = false;
  } catch (error) {
    console.error('Failed to preload images:', error);
    isLoading.value = false; // Consider how you want to handle errors
  }
}

watch(() => props.images, preloadAllImages, { immediate: true });

onMounted(() => {
  watch(isLoading, async (newValue) => {
    if (!newValue && !splideInitialized.value) {
      await nextTick();
      initializeSplide();
    }
  });
});

const  initializeSplide = () => {
  if (splide.value) {
    const { $Splide, $AutoScroll } = useNuxtApp();
    const splideInstance = new $Splide(splide.value, {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      autoWidth: true,
      autoScroll: {
        speed: 1,
      },
      arrows: false,
      pagination: false,
    });

    splideInstance.mount({ AutoScroll: $AutoScroll });
    splideInitialized.value = true;
  } else {
    console.error('Splide element not found');
  }
}
</script>

<template>
  <div v-if="isLoading" class="loading-container">
    <p class="fw-light">กำลังโหลดรูปภาพ...กรุณารอสักครู่</p>
  </div>
  <div v-else class="w-100 ms-0 me-0 d-flex overflow-hidden order-md-2 order-1">
    <div class="splide h-100" ref="splide">
      <div class="splide__track h-100">
        <ul class="splide__list h-100">
          <li v-for="image in loadedImages" :key="image" class="splide__slide">
            <div class="image-container">
              <img
                :src="image"
                width="auto"
                height="200"
                alt="Slide Image"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 100%;
  background-color: #f0f0f0;
}

.image-container {
  height: 220px;
  width: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
</style>