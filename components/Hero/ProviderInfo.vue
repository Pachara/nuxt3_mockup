<script setup>
  const config = useRuntimeConfig();

</script>
<template>
    <div class="rounded-3 w-100 p-3 position-relative">
      <div class="pb-0  row">


        <div class="col-12 col-md-4 p-1 pe-3 d-flex align-items-center justify-content-center" >
          <div class="border rounded-circle overflow-hidden" style="width:150px;height:150px;">
              <nuxt-img :src="`${config.public.baseURL}/images/profile/profile.jpg`" class="img-fluid" />
          </div>
        </div>

        <div class="col-12 col-md-8 text-center text-md-start">
        <p class="d-flex align-items-center justify-content-center justify-content-md-start" style="margin:0;padding:0;font-size:0.9em;margin-bottom:3px;">
          <span class="badge rounded-pill text-bg-warning me-2 d-flex" style="font-size:0.6em;margin-left:-5px;border:1px solid black;padding-top:3px;padding-bottom:3px;">
            Premium Provider
          </span>
        </p>
        <h1 class="h1-media fw-bold p-0 m-0 me-1">เจ้าฟ้า คาร์เร้น</h1>
        <p class="keyword-media fw-light mb-1">#รถเช่านครศรีธรรมราช #รถเช่าสนามบิน</p>
       <p class="text-bigger fs-5 d-flex justify-content-center justify-content-md-start">
          <span class="d-flex align-items-center border rounded-3 p-1 me-1 bg-info text-white">
            <i class="bi bi-facebook"></i>
            <span class="fs-5 ps-1 pe-1">1,200 Likes</span>
          </span>
          <span class="d-flex align-items-center border rounded-3 p-1 me-1 bg-ddd">
            <i class="bi bi-instagram"></i>
            <span class="fs-5 ps-1 pe-1">1.5K Follows</span>
          </span>
        </p>
        </div>

      </div>

      <p class="content-media fw-light m-0 pt-0">
        ศูนย์บริการรถเช่านครศรีธรรมราช มอบประสบการณ์ที่ประทับใจจนได้รับการบอกต่อมากที่สุดในจังหวัด เรามีจุดรับ-คืนรถทั้งที่สนามบินและในตัวเมืองเพื่อความสะดวกของลูกค้า สำหรับผู้ใช้บริการประจำ เรามีโปรแกรมส่วนลดพิเศษที่คุ้มค่า ด้วยมาตรฐานการบริการที่เป็นที่ยอมรับ จึงทำให้เราเป็นที่นิยมและได้รับการแนะนำอย่างกว้างขวางในนครศรีธรรมราช
      </p>
      


    </div>
  </template>
  

  
  <style scoped>
  .h1-media {
    font-size: 2.3em;
    line-height: 1.2;
  }
  
  .content-media {
    font-size: 1.1em;
    line-height: 1.4;
  }
  
  .text-bigger {
    font-size: 1.25em;
  }
  
  .keyword-media {
    font-size: 1em;
  }
  </style>
  