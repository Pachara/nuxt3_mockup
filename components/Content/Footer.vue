<script setup>
const config = useRuntimeConfig();
</script>
<template>
  <div class="row bg-success p-4">
    <div class="col-lg-5 col-12 text-start fs-1 p-4 bg-warning ">
      <ol class="list-unstyled">
        <li class="header">
          <h2>ติดต่อใช้รถกับเจ้าฟ้าคาร์เร้น</h2>
        </li>
        <li>รถเช่าสนามบินนครศรีธรรมราช</li>
        <li>รถเช่านครศรีธรรมราช</li>
        <li>รถเช่านอำเภอเมืองครศรีธรรมราช</li>
        <li>ข้อมูลสมาชิกสมาคมรถเช่าออนไลน์</li>
        <li>ระยะเวลาที่ประกอบการ</li>
        <li>จำนวนรถที่ให้บริการ</li>
        <li>สมัครงานกับเจ้าฟ้าคาร์เร้นท์</li>
        <li class="pt-2"><nuxt-img :src="`${config.public.baseURL}/images/logo/logo_white.png`" /></li>

      </ol>
    </div>

    <div class="col-lg-4 col-12 text-start fs-1 p-4 bg-warning">
      <ol class="list-unstyled">
        <li class="header">
          <h2>รถเช่าจังหวัดนครศรีธรรมราช</h2>
        </li>
        <li>รถเช่าสนามบินนครศรีธรรมราช</li>
        <li>รถเช่านครศรีธรรมราช</li>
        <li>รถเช่านอำเภอเมืองครศรีธรรมราช</li>
        <li>ข้อมูลสมาชิกสมาคมรถเช่าออนไลน์</li>
        <li>ระยะเวลาที่ประกอบการ</li>
        <li>จำนวนรถที่ให้บริการ</li>
        <li>สมัครงานกับเจ้าฟ้าคาร์เร้นท์</li>
        <li class="pt-2"><nuxt-img :src="`${config.public.baseURL}/images/logo/logo_white.png`" /></li>

      </ol>
    </div>

    <div class="col-lg-3 col-12 text-start fs-1 p-4 bg-warning ">
      <ol class="list-unstyled">
        <li class="header text-center">
          <h2>ติดต่อใช้รถ</h2>
        </li>
        <li class="d-flex justify-content-center">

          <div class=" call-zone d-flex align-items-center border border-dark rounded-5 pe-2  bg-success">
            <button
              class="rounded-circle bg-success border-0 text-white me-1 d-flex justify-content-center align-items-center"
              style="width:40px;height:40px;">
              <i class="bi bi-cpu-fill fs-3"></i>
            </button>
            <span class="fw-bold fs-4 text-white">จองรีลไทม์ออนไลน์</span>
          </div>

        </li>
        <li class="d-flex justify-content-center">

          <div class="call-zone d-flex align-items-center border border-success rounded-pill pe-2 bg-eee">
            <button
              class="btn btn-success button-size rounded-circle d-flex justify-content-center align-items-center me-1">
              <i class="bi bi-telephone-fill fs-4"></i>
            </button>
            <span class="fw-bold fs-4">โทรจองรถ</span>
          </div>

        </li>

        <li class="d-flex justify-content-center">
          <div class="call-zone d-flex align-items-center border border-success rounded-pill pe-2 bg-success">
            <button
              class="btn btn-success button-size rounded-circle d-flex justify-content-center align-items-center me-1">
              <i class="bi bi-line text-white" style="font-size: 2em; margin-top: 4px;"></i>
            </button>
            <span class="fw-bold fs-4 text-white">ไลน์จองรถ</span>
          </div>

        </li>

        <li class="text-center mt-2">ระบบจองรถรัลไทม์ 100%</li>
        <li class="text-center">พร้อมรับสาย 24 ชม.</li>
        <li class="text-center">ตอบแชทไวภายใน 10 วินาที</li>


      </ol>
    </div>

  </div>
</template>

<style scoped>
ol li {
  font-size: 0.5em;
  margin-bottom: 5px;
}

.button-size {
  width: 40px;
  height: 40px;
}

.call-zone {
  width: 250px;
}
</style>
