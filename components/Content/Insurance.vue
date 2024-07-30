<script setup>

  const config = useRuntimeConfig();
  const images = [
    { src: `${config.public.baseURL}/images/car_step/1.png`, alt: "Car Step 1" },
    { src: `${config.public.baseURL}/images/car_step/2.png`, alt: "Car Step 2" },
    { src: `${config.public.baseURL}/images/car_step/3.png`, alt: "Car Step 3" },
    { src: `${config.public.baseURL}/images/car_step/4.png`, alt: "Car Step 4" }
  ];
</script>

<template>
  <div class="d-flex justify-content-center bg-car-insurance">
    <div class="row d-flex justify-content-center set-max-width w-100 bg-car-insurance ms-0 me-0">
        <div class="col-12">
          </div>
        <div class="col-md-4 col-12 d-flex align-items-center justify-content-center">
          <div class="w-100 bg-light-green h-100 position-relative p-0 m-0 border" style="min-height:500px;">
            <div class="row ">
              <div class="col-12 padding-added " >
                <h2 class="text-333" style="font-size:1.5em;">ฟรี ประกันภัยชั้น 1</h2>
                <p class="text-333" style="line-height:20px;">เมื่อเช่ารถกับเรา คุณสามารถขับขี่ได้อย่างมั่นใจด้วยประกันภัยที่ครอบคลุม ในกรณีเกิดอุบัติเหตุ คุณไม่ต้องกังวล เพราะเรามีบริการช่วยเหลือฉุกเฉิน 24 ชั่วโมงพร้อมดูแลคุณทุกสถานการณ์ ไม่ว่าจะเป็นการซ่อมแซมรถ การจัดหารถทดแทน หรือการประสานงานกับคู่กรณี เราดูแลทุกขั้นตอนเพื่อให้คุณเดินทางต่อได้อย่างราบรื่น </p>
              </div>
              <div class="col-12">

                <img :src="`${config.public.baseURL}/images/car_insurance1.jpg`"  class="img-fluid"/>
               
              </div>
              <div class="col-12 padding-added" >
              
                <h2 class="text-333" style="font-size:1.5em;">01 โทรหาเจ้าหน้าที่เรา</h2>
                <p class="text-333 position-relative" style="line-height:16px;font-size:0.8em;z-index:1">
                  ในกรณีเกิดอุบัติเหตุ การติดต่อเจ้าหน้าที่ของเราคือขั้นตอนแรกและสำคัญที่สุด เพียงกดหมายเลขฉุกเฉินที่เราให้ไว้ คุณจะได้รับการช่วยเหลือทันที ทีมงานผู้เชี่ยวชาญของเราจะรับฟังสถานการณ์ของคุณอย่างละเอียด พร้อมให้คำแนะนำที่เหมาะสมและชัดเจน ไม่ว่าจะเป็นการปฐมพยาบาลเบื้องต้น การประสานงานกับตำรวจ หรือการจัดการกับยานพาหนะที่เสียหาย เราพร้อมเป็นผู้ช่วยที่เชื่อถือได้ในทุกขั้นตอน เพื่อให้คุณรู้สึกปลอดภัยและได้รับการดูแลอย่างดีที่สุดในช่วงเวลาที่ยากลำบาก
                </p>
                <i class="bi bi-telephone-fill position-absolute " style="font-size:9em;left:0;bottom:0;color:#6DC699;z-index:0"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-12 d-flex align-items-center justify-content-center p-0">
          <div class="w-100 bg-car-insurance h-100 " style="min-height:500px;">
            <div class="row">
              <div class="col-12 p-3 bg-333 text-white" ><h2 class="p-0 m-0 " style="font-size:3em;">กรณีเกิดอุบัติเหตุ </h2></div>
              <div class="col-12 p-0 border">
                  <img :src="`${config.public.baseURL}/images/car_insurance3.jpg`" class="img-fluid">
                  <div class="p-3 position-relative" style="background:#CFBEAC">
                <h2 class="text-333 pb-0 m-0" style="font-size:1.5em;">01 รีบติดต่อเจ้าหน้าที่ของเรา</h2>
                <p class="text-333 position-relative p-1 pb-0 mb-0" style="line-height:20px;">
                  เมื่อเกิดอุบัติเหตุ เจ้าหน้าที่ประกันภัยของเราจะมาถึงที่เกิดเหตุโดยเร็ว เพื่อประเมินสถานการณ์และเก็บข้อมูล ระหว่างรอ โปรดอยู่ในที่ปลอดภัยและปฏิบัติตามคำแนะนำของเจ้าหน้าที่ ทีมงานของเราจะบันทึกหลักฐานและประสานงานกับทุกฝ่าย เพื่อปกป้องสิทธิของท่าน
                </p>
              </div>
              </div>
              <div class="col-12 p-0 border">
                  <img :src="`${config.public.baseURL}/images/car_insurance7.jpg`" class="img-fluid">
                  <div class="p-3 position-relative" style="background:#CFBEAC">
                <h2 class="text-333 pb-0 m-0" style="font-size:1.5em;">02 รอเจ้าหน้าที่ประกันภัย</h2>
                <p class="text-333 position-relative p-1 pb-0 mb-0" style="line-height:20px;">
                  เมื่อเกิดอุบัติเหตุ เจ้าหน้าที่ประกันภัยของเราจะมาถึงที่เกิดเหตุโดยเร็ว เพื่อประเมินสถานการณ์และเก็บข้อมูล ระหว่างรอ โปรดอยู่ในที่ปลอดภัยและปฏิบัติตามคำแนะนำของเจ้าหน้าที่ ทีมงานของเราจะบันทึกหลักฐานและประสานงานกับทุกฝ่าย เพื่อปกป้องสิทธิของท่าน
                </p>
              </div>
              </div>
              
              <div class="col-12 p-0 ">
                <div class="background4 " >
                  <div class="background-content p-3">
                  </div>
                    
                </div>
              </div>
              <div class="col-12 p-3 position-relative">
                <h2 class="text-333" style="font-size:1.5em;">01 โทรหาเจ้าหน้าที่เรา</h2>
                <p class="text-333 position-relative" style="line-height:16px;font-size:0.8em;z-index:1">
                  เมื่อเกิดอุบัติเหตุ เจ้าหน้าที่ประกันภัยของเราจะมาถึงที่เกิดเหตุโดยเร็ว เพื่อประเมินสถานการณ์และเก็บข้อมูล ระหว่างรอ โปรดอยู่ในที่ปลอดภัยและปฏิบัติตามคำแนะนำของเจ้าหน้าที่ ทีมงานของเราจะบันทึกหลักฐานและประสานงานกับทุกฝ่าย เพื่อปกป้องสิทธิของท่าน
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url('/images/car_insurance3.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top:65%; /* Aspect ratio 16:9 */
  position: relative;
}
.background4 {
  background-image: url('/images/car_insurance4.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top:65%; /* Aspect ratio 16:9 */
  position: relative;
}
.background-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.padding-added{
  padding-left:50px;padding-right:50px;padding-top:30px;
  padding-bottom:30px;
}
.set-max-width {
  max-width: 1024px;
}
@media (max-width: 480px) {

  .responsive-h2 {
    font-size:0.7em !important;
    padding:10px !important;
    padding-top:5px !important;
    padding-bottom:5px !important;
  }



}





</style>
