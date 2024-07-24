<template>
    <div class="d-flex justify-content-center pb-4">
      <div class="page-container row d-flex justify-content-center w-100">
        <div class="row">
          <div class="col-md-6 col-12 rounded-4">
            <div class="row g-3 ps-3 pe-3">
              <div class="col-md-6 col-6" v-for="(image, index) in images" :key="index">
                <div class="square-div">
                  <div class="content border rounded-3 bg-light d-flex align-items-center justify-content-center overflow-hidden">
                    <nuxt-img
                      loading="lazy"
                      provider="cloudinary"
                      format="webp"
                      :src="image.src"
                      width="234"
                      height="234"
                      class="img-fluid"
                      :alt="image.alt"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="margin-hack col-md-6 col-12 fw-light">
            <div class="row">
              <div class="col-md-6 col-12 " v-for="(step, index) in steps" :key="index">
                <div class="square-div ">
                  <div class="content rounded-3 d-flex justify-content-center overflow-hidden">
                    <div class="p-3"  :class="{'border-animate' : index==3}">
                      <div class="fw-bold mb-1" style="font-size:2.5em;">
                        <span class="d-inline-block bg-dark text-white p-1 pt-0 pb-0 rounded-3">{{ step.number }}</span>
                        {{ step.title }}
                      </div>
                      <p style="line-height:20px;">
                        {{ step.description }}
                      </p>
                    </div>
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
    { number: "01", title: "จอง", description: "โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638 โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638" },
    { number: "02", title: "จ่าย", description: "โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638 โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638" },
    { number: "03", title: "จบ", description: "โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638 โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638" },
    { number: "04", title: "รับรถ", description: "โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638 โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638" }
  ];
  </script>
  
  <style scoped>
  .page-container {
    align-items: center;
    max-width:1124px;
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
  }
  
  @media (max-width: 480px) {
    .margin-hack {
      margin-top: 20px;
    }
  }
  </style>
  