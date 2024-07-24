<template>
    <div class="d-flex justify-content-center pb-4">
        <div class="page-container row d-flex justify-content-center w-100">
            <div class="row">
                <div class="step col-md-3 col-12 mb-3">
                    <div class="rounded-3 border overflow-hidden">
                        <div class="row step-content-wrapper ">
                            <div class="col-md-12 col-6">
                                    <div class="content rounded-3 d-flex justify-content-center align-items-center overflow-hidden">
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
                            <div class="col-md-12 col-6 p-0">
                                <div class="image-container">
                                    <nuxt-img loading="lazy" provider="cloudinary" format="webp" :src="images[0].src"
                                        :alt="images[0].alt" class="cover-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step col-md-3 col-12 mb-3">
                    <div class="rounded-3 border overflow-hidden">
                        <div class="row step-content-wrapper ">
                            <div class="col-md-12 col-6">
                                <div class="square-div">
                                    <div
                                        class="content rounded-3 d-flex justify-content-center align-items-center overflow-hidden">
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
                            </div>
                            <div class="col-md-12 col-6 p-0">
                                <div class="image-container">
                                    <nuxt-img loading="lazy" provider="cloudinary" format="webp" :src="images[1].src"
                                        :alt="images[1].alt" class="cover-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step col-md-3 col-12 mb-3">
                    <div class="rounded-3 border overflow-hidden">
                        <div class="row step-content-wrapper ">
                            <div class="col-md-12 col-6">
                                <div class="square-div">
                                    <div
                                        class="content rounded-3 d-flex justify-content-center align-items-center overflow-hidden">
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
                            </div>
                            <div class="col-md-12 col-6 p-0">
                                <div class="image-container">
                                    <nuxt-img loading="lazy" provider="cloudinary" format="webp" :src="images[2].src"
                                        :alt="images[2].alt" class="cover-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step col-md-3 col-12 mb-3">
                    <div class="rounded-3 border overflow-hidden">
                        <div class="row step-content-wrapper ">
                            <div class="col-md-12 col-6">
                                <div class="square-div">
                                    <div
                                        class="content rounded-3 d-flex justify-content-center align-items-center overflow-hidden">
                                        <div class="step-content">
                                            <div class="fw-bold mb-2" style="font-size:2.5em;">
                                                <span class="d-inline-block bg-dark text-white p-1 pt-0 pb-0 rounded-3">
                                                    {{ steps[3].number }}</span>
                                                {{ steps[3].title }}
                                            </div>
                                            <p class="fw-normal  m-0" style="line-height:20px;">
                                                {{ steps[3].description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-6 p-0">
                                <div class="image-container">
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
  const images = [
    { src: "https://mockup-a0p.pages.dev/images/car_step/1.png", alt: "Car Step 1" },
    { src: "https://mockup-a0p.pages.dev/images/car_step/2.png", alt: "Car Step 2" },
    { src: "https://mockup-a0p.pages.dev/images/car_step/3.png", alt: "Car Step 3" },
    { src: "https://mockup-a0p.pages.dev/images/car_step/4.png", alt: "Car Step 4" }
  ];
  
  const steps = [
    { number: "01", title: "จอง", description: "ท่านสามารถจองรถยนต์ผ่านระบบออนไลน์แบบเรียลไทม์ โดยเลือกรุ่นรถและระบุวันที่ต้องการใช้งาน หรือหากต้องการความช่วยเหลือ ท่านสามารถติดต่อเจ้าหน้าที่โดยตรงผ่านโทรศัพท์หมายเลข 098-356-3638 หรือทาง LINE ไอดี @Carpluz เพื่อดำเนินการจองรถ" },
    { number: "02", title: "จ่าย", description: "โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638 โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638" },
    { number: "03", title: "จบ", description: "โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638 โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638" },
    { number: "04", title: "รับรถ", description: "โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638 โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638" }
  ];
  </script>
  
  <style scoped>
  .image-container {
  width: 100%;
  height: 100%; /* This will make it take the full height of its parent */
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
      .step{
        padding:10px;
    }
    .step-content{
        padding:30px;
    }
  .page-container {
    align-items: center;
    max-width:1180px;
  }
  
  .square-div {
    position: relative;
    width: 100%;
    padding-bottom: 100%; /* This creates a 1:1 aspect ratio */
  }
  
  .square-div .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  

  
  .border-animate {
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, orange 50%, transparent 50%), 
                linear-gradient(90deg, orange 50%, transparent 50%), 
                linear-gradient(0deg, orange 50%, transparent 50%), 
                linear-gradient(0deg, orange 50%, transparent 50%);
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: 16px 4px, 16px 4px, 4px 16px, 4px 16px;
    background-position: 0% 0%, 100% 100%, 0% 100%, 100% 0px;
    border-radius: 5px;
    padding: 10px;
    animation: dash 5s linear infinite;
  }
  
  @keyframes dash {
    to {
      background-position: 100% 0%, 0% 100%, 0% 0%, 100% 100%;
    }
  }
  
  @media (max-width: 1200px) {
    .page-container {
      align-items: flex-start;
      padding: 0;
    }
  
    .margin-hack {
      margin-top: 20px;
    }
  }
  
  @media (max-width: 768px) {
    .page-container {
      align-items: flex-start;
      padding: 0;
    }
  
    .square-div {
      padding-bottom: 0 !important;
    }
  
    .square-div .content {
      position: relative !important;
    }
  
    .margin-hack {
      margin-top: 20px;
    }
    .step{
        padding:0px;
    }
    .step-content{
        padding:10px;
    }

  }
  
  @media (max-width: 480px) {
    .margin-hack {
      margin-top: 20px;
    }
    .step{
        padding:0px;
    }
    .step-content{
        padding:10px;
    }

  }
  </style>
  