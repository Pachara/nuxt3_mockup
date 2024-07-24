<script setup>
definePageMeta({
    layout: 'main',
});

const { data: randomImages, status, refresh } = await useAsyncData('randomImages', async () => {
    const response = await fetch('https://randomuser.me/api/?results=15');
    const data = await response.json();
    return data.results.map(user => {
        const originalUrl = user.picture.thumbnail;
        return originalUrl;
    });
});

const refreshImages = () => refresh();


const splide = ref(null);
const images = ref([
    'https://mockup-a0p.pages.dev/images/slideshow/1.JPG',
    'https://mockup-a0p.pages.dev/images/slideshow/2.JPG',
    'https://mockup-a0p.pages.dev/images/slideshow/3.JPG',
    'https://mockup-a0p.pages.dev/images/slideshow/4.JPG',
    'https://mockup-a0p.pages.dev/images/slideshow/5.JPG',
    'https://mockup-a0p.pages.dev/images/slideshow/6.JPG',
    'https://mockup-a0p.pages.dev/images/slideshow/7.JPG',
    'https://mockup-a0p.pages.dev/images/slideshow/8.JPG',
    'https://mockup-a0p.pages.dev/images/slideshow/9.JPG'
]);




onMounted(() => {
  const { $Splide, $AutoScroll } = useNuxtApp();
  const splideInstance = new $Splide(splide.value, {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 3,
    autoWidth: true,  // Enable autoWidth
    autoScroll: {
      speed: 1,
    },
    arrows: false,        // Disable arrows
    pagination: false,    // Disable pagination
  });

  splideInstance.mount({ AutoScroll: $AutoScroll });
});


</script>

<template>
    <div class="main-container">

        <div class="page-container row d-flex justify-content-center min-vh-100">

            <div class="row w-100 h-100 max-w-1240 content-wrapper">
                <div class="col-12 media-container bg-carpluz-light">
                    <div class="d-flex flex-column h-100">
                        <div class="row header-container">
                            <div class="col-md-4 col-6 mb-2 order-1 order-md-1">
                              <nuxt-img
                                provider="cloudinary"
                                src="https://mockup-a0p.pages.dev/images/logo/logo_white.png"
                                width="400"
                                height="114"
                                format="webp"
                                quality="auto"
                                loading="eager"
                                class="main_logo"
                                alt="Company Logo"
                              />
                            </div>
                            <div
                                class="col-md-3 col-6 mb-2 ps-2 pe-2 d-flex align-items-center justify-content-end order-2 order-md-3 fw-normal">
                                <div class="contact-box-menu d-flex justify-content-end w-100 h-100 align-items-center">
                                    <button
                                        class="rounded-circle bg-success border-0 text-white me-1 d-flex justify-content-center align-items-center"
                                        style="width:40px;height:40px;">
                                        <i class="bi bi-telephone-fill fs-4"></i>
                                    </button>
                                    <i class="bi bi-line text-success" style="font-size:2.6em;margin-top:4px;"></i>
                                </div>

                            </div>
                            <div
                                class="col-md-5 col-12 ps-2 pe-2 d-flex align-items-center justify-content-start order-3 order-md-2">
                                  <Marquee :images="randomImages" />
                            </div>
                        </div>

                        <div class="row body-container flex-grow-1">
                            <div class="col-md-6 col-12 p-2">
                                <div class="d-flex flex-column">
                                    <div class="rounded-3 w-100 p-3 position-relative  order-md-1 order-2">
                                        <div class="pb-0">
                                            <p class="d-flex align-items-center"
                                                style="margin:0;padding:0;font-size:0.9em;margin-bottom:3px;">
                                                <span class="badge rounded-pill text-bg-warning me-2 d-flex "
                                                    style="font-size:0.6em;margin-left:-5px;border:1px solid black;padding-top:3px;padding-bottom:3px;">
                                                    Premium Provider</span>
                                            </p>
                                            <h1 class="h1-media fw-bold p-0 m-0 me-1">เจ้าฟ้า คาร์เร้น </h1>
                                            <p class="keyword-media fw-light mb-1">#รถเช่านครศรีธรรมราช #รถเช่าสนามบิน
                                            </p>
                                            <p class="text-bigger fs-5 d-flex">
                                                <span
                                                    class="d-flex align-items-center border rounded-3 p-1 me-1 bg-info text-white"><i
                                                        class="bi bi-facebook"></i> <span class="fs-5 ps-1 pe-1">1,200
                                                        Likes </span></span>
                                                <span
                                                    class="d-flex align-items-center border rounded-3 p-1 me-1 bg-ddd"><i
                                                        class="bi bi-instagram"></i> <span class="fs-5 ps-1 pe-1">1.5K
                                                        Follows </span></span>
                                            </p>
                                        </div>

                                        <p class="content-media fw-light m-0 pt-0">
                                            ศูนย์บริการรถเช่านครศรีธรรมราช
                                            มาตรฐานที่ลูกค้าบอกต่อมากที่สุดในจังหวัดนครศรีธรรมราช
                                            รับและคืนรถได้ที่สนามบิน และตัวเมือง ลูกค้าที่เคยใช้บริการเป็นเวลายาวนาน
                                            เรามีโปรแกรมส่วนลดคุ้มสุดๆ
                                            มาตรฐานที่ลูกค้าบอกต่อมากที่สุดในจังหวัดนครศรีธรรมราช
                                        </p>
                                    </div>
                                    <div class="rounded-4 w-100 ms-0 me-0 d-flex overflow-hidden order-md-2 order-1"
                                        style="height:220px;">
                                        <div class="splide h-100" ref="splide">
                                            <div class="splide__track h-100">
                                                <ul class="splide__list h-100">
                                                    <li v-for="image in images" :key="image" class="splide__slide ">
                                                      <div class="image-container">
                                                          <nuxt-img
                                                            provider="cloudinary"
                                                            :src="image" 
                                                            width="auto"
                                                            height="200"
                                                            format="webp"
                                                            quality="auto"
                                                            alt="Slide Image"
                                                          />
                                                      </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 car-zone col-12">
                                <div class="h-100 p-2 pt-0">
                                    <div class="car-select-box row p-0  rounded-3 ps-0 pe-0 overflow-hidden bg-eee"
                                        style="font-size:0.9em;">
                                        <div class="col-12 p-1 text-bigger text-center bg-light fw-bold d-flex justify-content-between align-items-center ps-2 pe-2"
                                            style="border-bottom:1px solid #ddd">
                                            REALTIME ONLINE BOOKING <span class="blink_me"></span>
                                        </div>
                                        <div class="col-12 bg-light p-2">
                                            <div class="row">
                                                <div class="col-6">
                                                    <span style="padding-left:2px;"><i class="bi bi-geo-alt-fill"></i>
                                                        รับรถที่จังหวัด</span>
                                                    <div class="border rounded-3 p-2 bg-dark text-primary "
                                                        style="margin-top:2px;">
                                                        นครศรีธรรมราช
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <span style="padding-left:2px;"><i class="bi bi-calendar3"></i>
                                                        รับรถ</span>
                                                    <div class="border rounded-3 p-2 bg-dark text-primary "
                                                        style="margin-top:2px;">14 ม.ย.</div>
                                                </div>
                                                <div class="col-3">
                                                    <span style="padding-left:2px;"><i class="bi bi-calendar3"></i>
                                                        คืนรถ</span>
                                                    <div class="border rounded-3 p-2 bg-dark text-primary"
                                                        style="margin-top:2px;">18 ม.ย.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 p-2">
                                            <div class="car-zone-box row">
                                                <div class="col-12 fs-3 mb-1">
                                                    ราคาสำหรับเช่า 2 วัน
                                                </div>
                                                <div class="col-md-4 col-6 p-0">
                                                    <div class=" rounded-3">

                                                          <nuxt-img
                                                            provider="cloudinary"
                                                            src="https://mockup-a0p.pages.dev/images/car/car1.png"  
                                                            width="200"
                                                            height="200"
                                                            format="webp"
                                                            quality="auto"
                                                            class="img-fluid"
                                                            alt="Slide Image"
                                                          />


                                                    </div>
                                                </div>
                                                <div class="col-md-4  col-6 p-0">
                                                    <div class=" rounded-3">
                                                        <nuxt-img src="https://mockup-a0p.pages.dev/images/car/car1.png"  format="webp"  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"  width="400" height="400" class="img-fluid" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4  col-6 p-0">
                                                    <div class=" rounded-3">
                                                        <nuxt-img src="https://mockup-a0p.pages.dev/images/car/car1.png"  format="webp"  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"  width="400" height="400" class="img-fluid" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-6 p-0">
                                                    <div class=" rounded-3">
                                                        <nuxt-img src="https://mockup-a0p.pages.dev/images/car/car1.png"  format="webp"  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"  width="400" height="400" class="img-fluid" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4  col-6 p-0">
                                                    <div class=" rounded-3">
                                                        <nuxt-img src="https://mockup-a0p.pages.dev/images/car/car1.png" width="400"  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"  height="400" class="img-fluid" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4  col-6 p-0">
                                                    <div class=" rounded-3">
                                                        <nuxt-img src="https://mockup-a0p.pages.dev/images/car/car1.png" width="400"  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"  height="400" class="img-fluid" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                    </div>




                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>



        </div>

        <div class="next-content d-flex justify-content-center ">
            <div class="row d-flex justify-content-center w-100" style="max-width:1024px;">
                <div class="row">
                    <div class="col-12 text-center  fw-light sriracha p-4" style="font-size:2.5em;">"
                            เช่ารถ เรื่องง่าย "
                    </div>
                </div>
            </div>
        </div>

        <div class="next-content d-flex justify-content-center pb-4">
            <div class="page-container row d-flex justify-content-center w-100" style="max-width:1124px;">
                <div class="row ">
                    <div class="col-md-6 col-12 rounded-4 ">
                        <div class="row g-3 ps-3 pe-3" >
                            <div class="col-md-6 col-6">
                                <div class="square-div ">
                                    <div
                                        class="content border rounded-5 bg-light d-flex align-items-center justify-content-center overflow-hidden">
                                        <nuxt-img
                                        provider="cloudinary"
                                        format="webp"
                                        src="https://mockup-a0p.pages.dev/images/car_step/1.png"
                                         width="250"
                                        height="250"
                                        class="img-fluid"
                                        alt="Car Step Image"
                                      />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-6">
                                <div class="square-div">
                                    <div
                                        class="content border rounded-5 d-flex align-items-center justify-content-center overflow-hidden">
                                        <nuxt-img
                                        provider="cloudinary"
                                        format="webp"
                                        src="https://mockup-a0p.pages.dev/images/car_step/2.png"
                                        width="250"
                                        height="250"
                                        class="img-fluid"
                                        alt="Car Step Image"
                                      />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-6">
                                <div class="square-div">
                                    <div
                                        class="content border rounded-5  d-flex align-items-center justify-content-center overflow-hidden">
                                        <nuxt-img
                                        provider="cloudinary"
                                        format="webp"
                                        src="https://mockup-a0p.pages.dev/images/car_step/3.png"
                                        width="250"
                                        height="250"
                                        class="img-fluid"
                                        alt="Car Step Image"
                                      />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-6">
                                <div class="square-div">
                                    <div class="content border border-primary border-2 rounded-5 d-flex align-items-center justify-content-center overflow-hidden">
                                        <nuxt-img
                                        provider="cloudinary"
                                        format="webp"
                                        src="https://mockup-a0p.pages.dev/images/car_step/4.png"
                                        width="250"
                                        height="250"
                                        class="img-fluid"
                                        alt="Car Step Image"
                                      />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="margin-hack col-md-6 col-12 fw-light">
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <div class="square-div">
                                    <div class="content rounded-3 d-flex justify-content-center overflow-hidden">
                                        <div class="p-3">
                                            <div class="fw-bold mb-1" style="font-size:2.5em;">
                                                <span class="d-inline-block bg-dark text-white p-1 pt-0 pb-0 rounded-3">01</span>
                                                จอง
                                            </div>
                                            <p style="line-height:20px;">
                                                โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638
                                                โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12">
                                <div class="square-div">
                                    <div
                                        class="content  rounded-3 d-flex justify-content-center overflow-hidden">
                                        <div class="p-3">
                                    <div class="fw-bold mb-1" style="font-size:2.5em;">
                                        <span
                                            class="d-inline-block bg-dark text-white p-1 pt-0 pb-0 rounded-3">02</span>
                                        จ่าย
                                    </div>
                                    <p  style="line-height:20px;">
                                        โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638
                                        โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638
                                    </p>
                                </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12">
                                <div class="square-div">
                                    <div
                                        class="content  rounded-3 d-flex  justify-content-center overflow-hidden">
                                        <div class="p-3">
                                    <div class="fw-bold mb-1" style="font-size:2.5em;">
                                        <span
                                            class="d-inline-block bg-dark text-white p-1 pt-0 pb-0 rounded-3">03</span>
                                        จบ
                                    </div>
                                    <p style="line-height:20px;">
                                        โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638
                                        โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638
                                    </p>
                                </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 ">
                                <div class="square-div ">
                                    <div
                                        class="content border-animate  rounded-3 d-flex justify-content-center overflow-hidden">
                                        <div class="p-3">
                                    <div class="fw-bold mb-1" style="font-size:2.5em;">
                                        <span
                                            class="d-inline-block bg-dark text-white p-1 pt-0 pb-0 rounded-3">04</span>
                                        รับรถ
                                    </div>
                                    <p style="line-height:20px;">
                                        โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638
                                        โทรมาจอง หรือจะไลน์มาสอบถามได้ทุกช่องทาง ไลน์ @CARPLUZ หรือ โทร. 098-356-3638
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

    </div>
</template>

<style scoped>
.main-container {
  overflow-x: hidden;
  width: 100%;
}

.page-container {
  align-items: center;
}

.header-container {
  padding: 10px;
}

.body-container {
  padding: 10px;
}

.h1-media {
  font-size: 2.3em;
  line-height: 40px;
}

.content-media {
  font-size: 1.3em;
  line-height: 30px;
}

.bg-carpluz-light {
  background: #F1EFE7 !important;
}

.main_logo {
  width: 100%;
  height: auto;
}

.max-w-1240 {
  max-width: 1240px;
}

.content-wrapper {
  max-width: 1240px;
  max-height: 697px;
  height: 100%;
}

.media-container {
  border: 2px solid #555;
  border-radius: 15px;
}

.car-zone {
  padding-left: 30px !important;
  padding-right: 30px !important;
}

.contact-box-menu {
  padding-right: 25px;
}

.car-zone-box {
  padding: 10px;
}

.car-select-box {
  border: 1px solid #333;
}

.splide {
  width: 100%;
  margin: auto;
}

.splide__slide {
  background: white;
  text-align: center;
}

.image-container {
  height: 220px; /* Match this to the image height */
  width: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blink_me {
  animation: blinker 2s linear infinite;
  width: 10px;
  height: 10px;
  display: inline-block;
  border: 1px solid green;
  background-color: green;
  border-radius: 100%;
}

@keyframes blinker {
  50% {
    opacity: 0.6;
  }
}

@media (max-width: 1200px) {
  .page-container {
    align-items: flex-start;
    padding: 0;
  }

  .content-wrapper {
    height: auto;
    min-height: 100vh;
    max-height: none;
  }

  .media-container {
    border: 0;
    padding: 0;
    border-radius: 0;
  }

  .header-container,
  .body-container {
    padding: 10px;
  }

  .main_logo {
    width: 220px;
  }

  .car-zone {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  .car-zone-box,
  .car-select-box {
    padding: 5px;
    margin: 0 !important;
  }

  .contact-box-menu {
    padding-right: 0;
  }

  .h1-media {
    font-size: 2em;
    line-height: 1.2;
  }

  .content-media {
    font-size: 1.2em;
    line-height: 1.4;
  }
  .margin-hack{
    margin-top:40px;
  }
}

@media (max-width: 768px) {
  .page-container {
    align-items: flex-start;
    padding: 0;
  }

  .content-wrapper {
    height: auto;
    min-height: 100vh;
    max-height: none;
  }

  .media-container {
    border: 0;
    padding: 0;
    border-radius: 0;
  }

  .header-container,
  .body-container {
    padding: 10px;
  }

  .main_logo {
    width: 220px;
  }

  .car-zone {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  .car-zone-box,
  .car-select-box {
    padding: 5px;
    margin: 0 !important;
  }

  .contact-box-menu {
    padding-right: 0;
  }

  .h1-media {
    font-size: 2em;
    line-height: 1.2;
  }

  .content-media {
    font-size: 1.2em;
    line-height: 1.4;
  }
  .square-div {
    position: relative;
    width: 100%;
    padding-bottom: 0 !important;
}

.square-div .content {
    position: relative !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.margin-hack{
    margin-top:40px;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 5px;
  }

  .body-container {
    padding: 0;
  }

  .h1-media {
    font-size: 1.8em;
    line-height: 1.2;
  }

  .content-media {
    font-size: 1.1em;
    line-height: 1.3;
  }

  .main_logo {
    width: 180px;
  }

  .car-zone {
    padding: 0 !important;
  }

  .car-zone-box,
  .car-select-box {
    padding: 0;
    margin: 0;
  }

  .contact-box-menu {
    padding: 0;
  }
  .square-div {
    position: relative;
    width: 100%;
    padding-bottom: 0 !important;
}

.square-div .content {
    position: relative !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.margin-hack{
    margin-top:40px;
  }
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



.numberCircle {
  display: flex;
  width: 45px;
  align-items: center;  
  justify-content: center;
  aspect-ratio: 1 / 1;
  border-radius: 50%;  
  border: 2px solid black;
  background:black;
  color:white;
  float:left;
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



</style>