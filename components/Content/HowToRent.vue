<template>
    <div class="d-flex justify-content-center pb-4">
        <div class="page-container row d-flex justify-content-center w-100">
            <div class="row">
                <div class="step col-md-3 col-12 mb-3">
                    <div class="rounded-4 border overflow-hidden transition-wrapper" style="border-color:#ddd!important">
                        <div class="row step-content-wrapper w-100 m-auto">
                            <div class="col-12 padding-hack" >
                                <div class="rounded-3 d-flex justify-content-center align-items-center overflow-hidden">
                                    <div class="step-content">
                                        <div class="fw-bold mb-2" style="font-size:2.5em;">
                                            <span class="d-inline-block bg-dark text-white p-1 pt-0 pb-0 rounded-3">
                                                {{ steps[0].number }}</span>
                                            {{ steps[0].title }}
                                        </div>
                                        <p class="fw-normal m-0" style="line-height:20px;">
                                            {{ steps[0].description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center align-items-center mb-3">
                                <div class="d-flex align-items-center border border-success rounded-5 pe-2 me-2 bg-eee">
                                <button class="rounded-circle bg-success border-0 text-white me-1 d-flex justify-content-center align-items-center" style="width:40px;height:40px;">
                                    <i class="bi bi-telephone-fill fs-4"></i>
                                </button>
                                <span class="fw-bold fs-4">โทรจอง</span>
                                </div>
                                <div class="d-flex align-items-center border border-success rounded-5 pe-2 bg-success">
                                <button class="rounded-circle bg-success  border-0 text-white me-1 d-flex justify-content-center align-items-center" style="width:40px;height:40px;">
                                    <i class="bi bi-line text-white" style="font-size:2.3em;margin-top:4px;"></i>
                                </button>
                                <span class="fw-bold fs-4 text-white">ไลน์</span>
                                </div>
                            </div>
                            <div class="col-12 p-0">
                                <div class="w-100">
                                    <nuxt-img loading="lazy" provider="cloudinary" format="webp" :src="images[0].src"
                                        :alt="images[0].alt" class="cover-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step col-md-3 col-12 mb-3">
                    <div class="rounded-4 border overflow-hidden transition-wrapper" style="border-color:#ddd!important">
                        <div class="row step-content-wrapper w-100 m-auto">
                            <div class="col-12 padding-hack">
                                <div class="rounded-3 d-flex justify-content-center align-items-center overflow-hidden">
                                    <div class="step-content">
                                        <div class="fw-bold mb-2" style="font-size:2.5em;">
                                            <span class="d-inline-block bg-dark text-white p-1 pt-0 pb-0 rounded-3">
                                                {{ steps[1].number }}</span>
                                            {{ steps[1].title }}
                                        </div>
                                        <p class="fw-normal m-0" style="line-height:20px;">
                                            {{ steps[1].description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center align-items-center mb-3">
                                <div class="d-flex align-items-center border border-dark rounded-5 pe-2 me-2 bg-success">
                                <button class="rounded-circle bg-success border-0 text-white me-1 d-flex justify-content-center align-items-center" style="width:40px;height:40px;">
                                    <i class="bi bi-cpu-fill fs-3"></i>
                                </button>
                                <span class="fw-bold fs-4 text-white">จองรีลไทม์ออนไลน์</span>
                                </div>
                            </div>
                            <div class="col-12 p-0">
                                <div class="w-100">
                                    <nuxt-img loading="lazy" provider="cloudinary" format="webp" :src="images[1].src"
                                        :alt="images[1].alt" class="cover-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step col-md-3 col-12 mb-3">
                    <div class="rounded-4 border overflow-hidden transition-wrapper" style="border-color:#ddd!important">
                        <div class="row step-content-wrapper w-100 m-auto">
                            <div class="col-12 padding-hack">
                                <div class="rounded-3 d-flex justify-content-center align-items-center overflow-hidden">
                                    <div class="step-content">
                                        <div class="fw-bold mb-2" style="font-size:2.5em;">
                                            <span class="d-inline-block bg-dark text-white p-1 pt-0 pb-0 rounded-3">
                                                {{ steps[2].number }}</span>
                                            {{ steps[2].title }}
                                        </div>
                                        <p class="fw-normal m-0" style="line-height:20px;">
                                            {{ steps[2].description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center align-items-center mb-3">
                                <div class="d-flex align-items-center border border-dark rounded-5 pe-2 me-2 bg-warning">
                                <button class="rounded-circle bg-white border-0 text-dark me-1 d-flex justify-content-center align-items-center" style="width:40px;height:40px;">
                                    <i class="bi bi-credit-card-2-front-fill fs-3"></i>
                                </button>
                                <span class="fw-bold fs-4 text-dark">ทำลายน้ำเอกสาร</span>
                                </div>
                            </div>
                            <div class="col-12 p-0">
                                <div class="w-100">
                                    <nuxt-img loading="lazy" provider="cloudinary" format="webp" :src="images[2].src"
                                        :alt="images[2].alt" class="cover-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step col-md-3 col-12 mb-3">
                    <div class="rounded-4 border overflow-hidden transition-wrapper" style="border:2px solid #333!important">
                        <div class="row step-content-wrapper w-100 m-auto  bg-warning">
                            <div class="col-12 padding-hack">
                                <div class="rounded-3 d-flex justify-content-center align-items-center overflow-hidden">
                                    <div class="step-content">
                                        <div class="fw-bold mb-2" style="font-size:2.5em;">
                                            <span class="d-inline-block bg-dark text-white p-1 pt-0 pb-0 rounded-3">
                                                {{ steps[3].number }}</span>
                                            {{ steps[3].title }}
                                        </div>
                                        <p class="fw-normal m-0" style="line-height:20px;">
                                            {{ steps[3].description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center align-items-center mb-3">
                                <div class="d-flex align-items-center border border-dark rounded-5 pe-2 me-2 bg-555">
                                <button class="rounded-circle bg-dark border-0  text-white me-1 d-flex justify-content-center align-items-center" style="width:40px;height:40px;">
                                    <i class="bi bi-geo-alt-fill fs-3"></i>
                                </button>
                                <span class="fw-bold fs-4 text-white">รถมี GPS ทุกคัน</span>
                                </div>
                            </div>
                            <div class="col-12 p-0">
                                <div class="w-100">
                                    <nuxt-img loading="lazy" provider="cloudinary" format="webp" :src="images[3].src"
                                        :alt="images[3].alt" class="cover-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script setup>
  const config = useRuntimeConfig();
  const images = [
    { src: `${config.public.baseURL}/images/car_step/1.png`, alt: "Car Step 1" },
    { src: `${config.public.baseURL}/images/car_step/2.png`, alt: "Car Step 2" },
    { src: `${config.public.baseURL}/images/car_step/3.png`, alt: "Car Step 3" },
    { src: `${config.public.baseURL}/images/car_step/4.png`, alt: "Car Step 4" }
  ];
  
  const steps = [
    { number: "01", title: "จอง", description: "ท่านสามารถจองรถยนต์ผ่านระบบออนไลน์แบบเรียลไทม์ โดยเลือกรุ่นรถและระบุวันที่ต้องการใช้งาน หรือหากต้องการความช่วยเหลือ ท่านสามารถติดต่อเจ้าหน้าที่โดยตรงผ่านโทรศัพท์หมายเลข 098-356-3638 หรือทาง LINE ไอดี @Carpluz เพื่อดำเนินการจองรถ" },
    { number: "02", title: "จ่าย", description: "ชำระเงินออนไลน์ปลอดภัยผ่าน Payment Gateway ที่เชื่อถือได้ พร้อมระบบ Secure Payment รับประกันความพึงพอใจด้วยนโยบายคืนเงินและเปลี่ยนรถทันที เพื่อประสบการณ์เช่ารถที่ไร้กังวลของคุณ 'เช่ารถ เรื่องง่าย' ปลอดภัยไร้กังวล" },
    { number: "03", title: "จบ", description: "ส่งเอกสารสำคัญอย่างปลอดภัยผ่านระบบ Secure Payment รับรองความเป็นส่วนตัวสูงสุด ไม่มีการบันทึกหรือเปลี่ยนแปลงข้อมูล พร้อมระบบลายน้ำอัตโนมัติเพื่อป้องกันการรั่วไหล ใช้ได้กับใบขับขี่ บัตรประชาชน และตั๋วเครื่องบิน" },
    { number: "04", title: "รับรถ", description: "รับประกันความพร้อมของรถด้วยการตรวจสอบอย่างละเอียดก่อนส่งมอบ พร้อมบริการจัดส่งโดยพนักงานมืออาชีพผ่านการฝึกอบรม พร้อมแนะนำการใช้งานรถอย่างละเอียด ด้วยความสุภาพและเป็นมิตร เพื่อมอบประสบการณ์การเช่ารถที่เหนือระดับ" }
  ];
  </script>
  
  <style scoped>
  .image-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
  }
  
  .step {
    padding: 10px;
  }
  
  .step-content {
    padding: 20px;
  }
  
  .page-container {
    align-items: center;
    max-width: 1180px;
  }
  
  .transition-wrapper {
    transition: all 0.3s ease;
  }
  
  .transition-wrapper:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 1200px) {
    .page-container {
      align-items: flex-start;
      padding: 0;
    }
  }
  
  @media (max-width: 768px) {
    .page-container {
      align-items: flex-start;
      padding: 0;
    }
  
    .step {
      padding: 10px;
    }
  
    .step-content {
      padding: 10px;
    }
  }
  
  @media (max-width: 480px) {
    .step {
      padding: 10px;
    }
  
    .step-content {
      padding: 10px;
      font-size:1.1em;
    }
    .padding-hack{
        padding: 15px;
    }
  }
  </style>