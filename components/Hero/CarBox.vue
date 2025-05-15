<template>
    <div class="h-100 p-2 pt-0 m-2">
      <div class="car-select-box row p-0 rounded-3 ps-0 pe-0 overflow-hidden bg-eee" style="font-size:0.9em;">
        <div class="col-12 p-1 text-bigger text-center bg-light fw-bold d-flex justify-content-between align-items-center ps-2 pe-2" style="border-bottom:1px solid #ddd">
          REALTIME ONLINE BOOKING <span class="blink_me"></span>
        </div>
        <div class="col-12 bg-light p-2">
          <div class="row">
            <div class="col-6">
            <span style="padding-left:2px;" ><i class="bi bi-geo-alt-fill"></i> รับรถที่จังหวัด</span>
            <ProvinceSelect v-model="selectedProvince" :options="provinces"  style="margin-top:2px;" />
          </div>
            <div class="col-3">
              <span style="padding-left:2px;"><i class="bi bi-calendar3"></i> รับรถ</span>
              <div class="border rounded-3 p-2 bg-dark text-primary" style="margin-top:2px;">14 ม.ย.</div>
            </div>
            <div class="col-3">
              <span style="padding-left:2px;"><i class="bi bi-calendar3"></i> คืนรถ</span>
              <div class="border rounded-3 p-2 bg-dark text-primary" style="margin-top:2px;">18 ม.ย.</div>
            </div>
          </div>
        </div>
        <div class="col-12 p-2">
          <div class="car-zone-box row">
            <div class="col-12 fs-3 mb-1">
              ราคาสำหรับเช่า 2 วัน
            </div>
            <div class="col-md-4 col-6 p-0">
              <div class="rounded-3">
                <nuxt-img loading="lazy" provider="cloudinary" src="https://mockup-a0p.pages.dev/images/car/car1.png" width="172" height="172" format="webp" quality="auto" class="img-fluid" alt="Slide Image" />
              </div>
            </div>
            <div class="col-md-4 col-6 p-0">
              <div class="rounded-3">
                <nuxt-img loading="lazy" provider="cloudinary" src="https://mockup-a0p.pages.dev/images/car/car1.png" width="172" height="172" format="webp" quality="auto" class="img-fluid" alt="Slide Image" />
              </div>
            </div>
            <div class="col-md-4 col-6 p-0">
              <div class="rounded-3">
                <nuxt-img loading="lazy" provider="cloudinary" src="https://mockup-a0p.pages.dev/images/car/car1.png" width="172" height="172" format="webp" quality="auto" class="img-fluid" alt="Slide Image" />
              </div>
            </div>
            <div class="col-md-4 col-6 p-0">
              <div class="rounded-3">
                <nuxt-img loading="lazy" provider="cloudinary" src="https://mockup-a0p.pages.dev/images/car/car1.png" width="172" height="172" format="webp" quality="auto" class="img-fluid" alt="Slide Image" />
              </div>
            </div>
            <div class="col-md-4 col-6 p-0">
              <div class="rounded-3">
                <nuxt-img loading="lazy" provider="cloudinary" src="https://mockup-a0p.pages.dev/images/car/car1.png" width="172" height="172" format="webp" quality="auto" class="img-fluid" alt="Slide Image" />
              </div>
            </div>
            <div class="col-md-4 col-6 p-0">
              <div class="rounded-3">
                <nuxt-img loading="lazy" provider="cloudinary" src="https://mockup-a0p.pages.dev/images/car/car1.png" width="172" height="172" format="webp" quality="auto" class="img-fluid" alt="Slide Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const provinces = [
  'กรุงเทพมหานคร', 'เชียงใหม่', 'ขอนแก่น', 'ชลบุรี', 'ภูเก็ต',
  'นครราชสีมา', 'นครศรีธรรมราช', 'อุบลราชธานี', 'สงขลา', 'สุราษฎร์ธานี'
]

const selectedProvince = ref('นครศรีธรรมราช')
  </script>
  
  <style scoped>
  .page-container {
    align-items: center;
  }
  
  .car-select-box {
    border: 1px solid #333;
  }
  
  .blink_me {
    animation: blinker 2s linear infinite;
    width: 10px;
    height: 10px;
    display: inline-block;
    border: 1px solid green;
    background-color: green;
    border-radius: 50%;
  }
  
  @keyframes blinker {
    50% {
      opacity: 0.6;
    }
  }
  </style>
  