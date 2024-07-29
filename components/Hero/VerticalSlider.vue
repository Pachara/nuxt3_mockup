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
    perMove: 1,
    direction: 'ttb', // top-to-bottom for vertical
    height: '360px', // Set a fixed height
    autoScroll: {
      speed: 1,
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
    },
    arrows: false,
    pagination: false,
    preloadPages: 3,
    throttle: 100,
    gap: '1rem',
    loop: true,
    cloneStatus: true,
    updateOnMove: true,
  });

  splideInstance.mount({ AutoScroll: $AutoScroll });
});
</script>

<template>
  <div class="w-100 ms-0 me-0 d-flex overflow-hidden order-md-2 order-1">
    <div class="splide w-100 m-auto" ref="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <li v-for="(i,k) in 8" class="splide__slide" :key="k">
            <div class="box-container bg-success rounded-4 border border-3">
              <div class="box-content text-white">
                <nuxt-img src="https://randomuser.me/api/portraits/thumb/men/32.jpg" class="rounded-circle m-1 border border-2" width="40px" height="40px" style="float:left"/>
                "ท่านสามารถจองรถยนต์ผ่านระบบออนไลน์แบบเรียลไทม์ โดยเลือกรุ่นรถและระบุวันที่ต้องการใช้งาน หรือหากต้องการความช่วยเหลือ {{ i }}"
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.splide {
  max-width: 320px;
}
.box-container {
  height: 120px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.box-content {
  text-align: left;
  padding: 20px;
  font-size: 16px;
}

.splide__track {
  height: 100%;
}

.splide__list {
  display: flex;
  flex-direction: column;
}
</style>