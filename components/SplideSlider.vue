<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const splide = ref(null);

onMounted(() => {
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
});
</script>

<template>
    <div class="w-100 ms-0 me-0 d-flex overflow-hidden order-md-2 order-1">
    <div class="splide h-100" ref="splide">
      <div class="splide__track h-100">
        <ul class="splide__list h-100">
          <li v-for="image in images" :key="image" class="splide__slide ">
            <div class="image-container">
              <nuxt-img loading="lazy"
                provider="cloudinary"
                :src="image"
                width="auto"
                height="200"
                format="webp"
                quality="auto"
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
  .image-container {
    height: 220px;
    width: 100%;
    overflow: hidden;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  