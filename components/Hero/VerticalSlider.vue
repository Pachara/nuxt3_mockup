<script setup>
import { ref, onMounted } from 'vue';

const splide = ref(null);

onMounted(() => {
  const { $Splide, $AutoScroll } = useNuxtApp();
  const splideInstance = new $Splide(splide.value, {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 3,
    autoHeight: true,
    direction: 'ttb', // top-to-bottom for vertical
    height: 'auto',
    autoScroll: {
      speed: 1,
      rewind: true, // Ensure it rewinds properly to create the bottom-to-top effect
    },
    arrows: false,
    pagination: false,
    preloadPages: 1,
    throttle: 100,
  });

  splideInstance.mount({ AutoScroll: $AutoScroll });
});
</script>



<template>
  <div class="w-100 ms-0 me-0 d-flex overflow-hidden order-md-2 order-1 ">
    <div class="splide w-100 m-auto" ref="splide">
      <div class="splide__track h-100" >
        <ul class="splide__list h-100">
          <li  v-for="(i,k) in 4" class="splide__slide " :key="k">
            <div class="box-container bg-success rounded-4 border border-3">
              <div class="box-content  text-white ">
                <nuxt-img src="https://randomuser.me/api/portraits/thumb/men/32.jpg"  class="rounded-circle m-1 border border-2" width="40px" height="40px" styl="float:left"/>
               "ท่านสามารถจองรถยนต์ผ่านระบบออนไลน์แบบเรียลไทม์ โดยเลือกรุ่นรถและระบุวันที่ต้องการใช้งาน หรือหากต้องการความช่วยเหลือ "
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped>
.splide{
  max-width:320px;
}
.box-container {
  height: 120px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0; /* Example margin */
}

.box-content {
  text-align: left;
  padding: 20px; /* Example padding */
  font-size: 16px; /* Example font size */
}

.splide__track {
  height: 100%;
  display: flex;
  flex-direction: column-reverse; /* Reverse the direction */
}

.splide__list {
  display: flex;
  flex-direction: column-reverse; /* Reverse the order of slides */
}
</style>
