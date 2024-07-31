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
  <div class="d-flex justify-content-center ">
    <div class="row set-max-width g-0">
      <div class="col-md-4 col-12 d-flex align-items-start justify-content-center px-2 ">
          <div class="row bg-light-green h-100 border">
            <div class="col-12 padding-added">
              <h2 class="m-0 p-0 text-decoration-underline text-success"><span style="font-size:2em;">รถทุกคัน</span>
              </h2>
              <h2 class="text-333 " style="font-size:1.6em;">รวมประกันภัยชั้นหนึ่ง</h2>
              <p class="text-333 " style="line-height:20px;">เมื่อเช่ารถกับเรา
                คุณสามารถขับขี่ได้อย่างมั่นใจด้วยประกันภัยที่ครอบคลุม ในกรณีเกิดอุบัติเหตุ คุณไม่ต้องกังวล
                เพราะเรามีบริการช่วยเหลือฉุกเฉิน 24 ชั่วโมงพร้อมดูแลคุณทุกสถานการณ์ ไม่ว่าจะเป็นการซ่อมแซมรถ
                การจัดหารถทดแทน หรือการประสานงานกับคู่กรณี เราดูแลทุกขั้นตอนเพื่อให้คุณเดินทางต่อได้อย่างราบรื่น </p>
            </div>
            <div class="col-12">

              <img :src="`/images/car_insurance1.png`" class="img-fluid" />

            </div>
            <div class="col-12 padding-added">

              <h2 class="text-333" style="font-size:1.5em;">รายละเอียดประกันภัย</h2>
              <p class="text-333 position-relative" style="font-size:1em;z-index:1">
                ประกันภัยชั้นหนึ่งของเราครอบคลุมความรับผิดต่อชีวิต ร่างกาย และทรัพย์สินของบุคคลภายนอก
                รวมถึงความเสียหายต่อตัวรถยนต์ที่เช่า ในกรณีที่เกิดอุบัติเหตุ
                เราดูแลค่าใช้จ่ายในการซ่อมแซมหรือเปลี่ยนอะไหล่ตามความจำเป็น นอกจากนี้
                ยังมีความคุ้มครองเพิ่มเติมสำหรับอุปกรณ์ตกแต่งเพิ่มเติมที่ไม่ใช่อุปกรณ์มาตรฐานของรถ เช่น ระบบนำทาง
                หรือระบบเครื่องเสียงพิเศษ ทั้งนี้ เงื่อนไขความคุ้มครองเป็นไปตามกรมธรรม์ที่ระบุ
                ซึ่งท่านสามารถสอบถามรายละเอียดเพิ่มเติมได้จากพนักงานของเรา
              </p>
             
            </div>
          </div>
      </div>
      <div class="col-md-8 col-12  px-2"  style="background:#CFBEAC">
          <div class="row border">
            <div class="col-md-6 col-12 py-3 bg-333 text-white text-center">
              <h2 class="p-0 m-0 " style="font-size:2.5em;">กรณีเกิดอุบัติเหตุ </h2>
            </div>
            <div class="col-md-6 col-12 py-3 bg-333 text-white">
              <div class="d-flex justify-content-center align-items-center w-100 h-100">

                <!-- Call Button -->
                <div class="d-flex align-items-center border border-danger rounded-pill pe-2 me-2 bg-white">
                  <button
                    class="btn btn-danger button-size rounded-circle d-flex justify-content-center align-items-center me-1">
                    <i class="bi bi-telephone-fill fs-4"></i>
                  </button>
                  <span class="fw-bold  text-dark" style="font-size:1em;">โทรแจ้งเหตุ</span>
                </div>

                <!-- Line Button -->
                <div class="d-flex align-items-center border border-danger rounded-pill pe-2 bg-danger">
                  <button
                    class="btn btn-danger button-size rounded-circle d-flex justify-content-center align-items-center me-1">
                    <i class="bi bi-line text-white" style="font-size: 2em; margin-top: 4px;"></i>
                  </button>
                  <span class="fw-bold  text-white" style="font-size:1em;">ไลน์แจ้งเหตุ</span>
                </div>

              </div>
            </div>
            <div class="col-6 p-0 border">
              <img :src="`${config.public.baseURL}/images/car_insurance5.png`" class="img-fluid">
              <div class="p-3 position-relative" style="background:#CFBEAC">
                <h2 class="text-333 pb-0 m-0" style="font-size:1.5em;"><span
                    class="d-inline-block bg-dark px-2 rounded-3 text-white">01</span> รีบติดต่อเจ้าหน้าที่</h2>
                <p class="text-333 position-relative p-0 pt-1 pb-0 mb-0" style="line-height:20px;">
                  เมื่อเกิดอุบัติเหตุ โปรดแจ้งเจ้าหน้าที่ของเราทันที เราจะส่งทีมงานมาถึงที่เกิดเหตุโดยเร็วที่สุด
                  เพื่อประเมินสถานการณ์และเก็บข้อมูล ระหว่างรอ โปรดอยู่ในที่ปลอดภัยและปฏิบัติตามคำแนะนำของเจ้าหน้าที่
                  ทีมงานของเราจะบันทึกหลักฐานและประสานงานกับทุกฝ่าย เพื่อปกป้องสิทธิของท่านอย่างเต็มที่
                </p>
              </div>
            </div>
            <div class="col-6 p-0 border">
              <img :src="`${config.public.baseURL}/images/car_insurance7.png`" class="img-fluid">
              <div class="p-3 position-relative" style="background:#CFBEAC">
                <h2 class="text-333 pb-0 m-0" style="font-size:1.5em;"><span
                    class="d-inline-block bg-dark px-2 rounded-3 text-white">02</span> รอเจ้าหน้าที่ประกันภัย</h2>
                <p class="text-333 position-relative p-0 pt-1 pb-0 mb-0" style="line-height:20px;">
                  เจ้าหน้าที่ของเราจะมาถึงที่เกิดเหตุโดยเร็ว เพื่อดำเนินการตามขั้นตอนอย่างมืออาชีพ
                  ทั้งการประเมินความเสียหาย เก็บหลักฐาน และประสานงานกับคู่กรณีและเจ้าหน้าที่ตำรวจ ระหว่างนี้
                  โปรดให้ข้อมูลที่เป็นประโยชน์แก่ทีมงานของเรา
                  เราจะดูแลทุกขั้นตอนเพื่อให้ท่านได้รับการคุ้มครองสิทธิอย่างเต็มที่
                </p>
              </div>
            </div>
            
            <div class="col-6 p-0 border">
              <img :src="`${config.public.baseURL}/images/car_insurance4.png`" class="img-fluid">
              <div class="p-3 position-relative" style="background:#CFBEAC">
                <h2 class="text-333 pb-0 m-0" style="font-size:1.5em;">กรณีท่านเป็น <span
                    class="d-inline-block bg-danger px-1 rounded-3 text-white">ฝ่ายผิด</span></h2>
                <p class="text-333 position-relative p-0 pt-1 pb-0 mb-0" style="line-height:20px;">
                  หากท่านเป็นฝ่ายผิด ท่านรับผิดชอบค่าเสียหายส่วนแรก <span class="text-danger fw-bold">3,000 บาท</span>
                  เราจะจัดการเคลมประกันและจัดหารถทดแทนให้ทันที โดยไม่มีค่าใช้จ่ายเพิ่มเติม
                  ท่านสามารถเดินทางต่อได้จนสิ้นสุดสัญญาเช่า เจ้าหน้าที่ของเราจะดูแลทุกขั้นตอน
                  ตั้งแต่การรายงานอุบัติเหตุไปจนถึงการส่งมอบรถคืน
                </p>
              </div>
            </div>
            <div class="col-6 p-0 border">
              <img :src="`${config.public.baseURL}/images/car_insurance5.png`" class="img-fluid">
              <div class="p-3 position-relative" style="background:#CFBEAC">
                <h2 class="text-333 pb-0 m-0" style="font-size:1.5em;"> กรณีท่านเป็น <span
                    class="d-inline-block bg-success px-1 rounded-3 text-white">ฝ่ายถูก</span></h2>
                <p class="text-333 position-relative p-0 pt-1 pb-0 mb-0" style="line-height:20px;">
                  หากท่านเป็นฝ่ายถูก ท่านไม่ต้องรับผิดชอบค่าเสียหายใดๆ
                  เจ้าหน้าที่จะประสานงานกับตำรวจและประกันคู่กรณีโดยตรง <span
                    class="text-success fw-bold">พร้อมจัดส่งรถทดแทน</span>ให้ทันทีโดยไม่มีค่าใช้จ่าย
                  เรามีทนายความให้คำปรึกษาฟรีหากจำเป็น และดูแลทุกขั้นตอนจนเสร็จสิ้น
                  เพื่อให้ท่านเดินทางต่อได้อย่างไร้กังวล
                </p>
              </div>
            </div>
            <div class="col-12 p-0 border bg-light-green">

              <img :src="`/images/happy.png`" class="img-fluid">

            </div>
            

          </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
  .button-size{
    width:40px;
    height:40px;
  }
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
  max-width: 960px;
}
@media (max-width: 480px) {

  .responsive-h2 {
    font-size:0.7em !important;
    padding:10px !important;
    padding-top:5px !important;
    padding-bottom:5px !important;
  }

  .padding-added{
  padding-left:30px;
  padding-right:30px;
}
.padding-added p{
  font-size:1.2em !important;
  line-height:23px !important;
}



}





</style>
