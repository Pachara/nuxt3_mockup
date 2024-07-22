<script setup>
definePageMeta({
    layout: 'main',
});

const { data: randomImages, status, refresh } = await useAsyncData('randomImages', async () => {
    const response = await fetch('https://randomuser.me/api/?results=15');
    const data = await response.json();
    return data.results.map(user => user.picture.thumbnail);
});

const refreshImages = () => refresh();


const splide = ref(null);
const images = ref([
    '/images/slideshow/1.JPG',
    '/images/slideshow/2.JPG',
    '/images/slideshow/3.JPG',
    '/images/slideshow/4.JPG',
    '/images/slideshow/5.JPG',
    '/images/slideshow/6.JPG',
    '/images/slideshow/7.JPG',
    '/images/slideshow/8.JPG',
    '/images/slideshow/9.JPG'
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
    <div class="container-fluid d-flex align-items-center justify-content-center vh-100 p-1">
        <div class="row w-100 h-100 max-w-1240 content-wrapper">
            <div class="col-12 media-container bg-carpluz-light rounded-3" style="border: 2px solid #555;">
                <div class="d-flex flex-column h-100">

                    <div class="row">
                        <div class="col-lg-4 col-6 mb-2 order-1 order-lg-1">
                            <nuxt-img src="images/logo/logo_white.png" class="main_logo" />
                        </div>
                        <div class="col-lg-3 col-6 mb-2 ps-2 pe-2 d-flex align-items-center justify-content-end order-2 order-lg-3 fw-normal">
                        </div>
                        <div class="col-lg-5 col-12 ps-2 pe-2 d-flex align-items-center justify-content-start order-3 order-lg-2">
                            <Marquee :images="randomImages" />
                        </div>
                    </div>
                    
                    <div class="row flex-grow-1">
                        <div class="col-lg-6 col-12 p-2">
                            <div class="d-flex flex-column">
                            <div class="rounded-3 w-100 p-3 position-relative  order-lg-1 order-2" >
                                <div class="pb-0">
                                    <p class="d-flex align-items-center" style="margin:0;padding:0;font-size:0.9em;margin-bottom:3px;">
                                        <span class="badge rounded-pill text-bg-warning me-2 d-flex " 
                                        style="font-size:0.6em;margin-left:-5px;border:1px solid black;padding-top:3px;padding-bottom:3px;">
                                        Premium Provider</span>
                                    </p>
                                    <h1 class="h1-media fw-bold p-0 m-0 me-1">เจ้าฟ้า คาร์เร้น </h1>
                                    <p class="keyword-media fw-light">#รถเช่านครศรีธรรมราช #รถเช่าสนามบิน</p>
                                </div>
                            <div class="contact-box row mb-2">
                              <div class="col-lg-6 col-12 p-1">
                                <div class="border p-2 rounded-5 position-relative bg-primary  d-flex align-items-center">
                                    <i class="bi bi-telephone-fill fs-3 ps-2 pe-2"></i>
                                     <div class="d-flex flex-column">
                                        <span class="text-smaller fw-light">โทรหาผู้ช่วยจอง รับสาย 24/7</span>
                                        <span class="call-number text-dark">088-828-2899</span>
                                     </div>
                                </div>
                              </div>
                              <div class="col-lg-6 col-12 p-1">
                                <div class="border p-2 rounded-5 position-relative bg-success  d-flex align-items-center">
                                    <i class="bi bi-line fs-3 ps-2 pe-2"></i>
                                     <div class="d-flex flex-column">
                                        <span class="text-smaller fw-light">สอบถามผ่านไลน์ ตอบเร็วจองไว</span>
                                        <span class="line-id text-dark">@CARPLUZ</span>
                                     </div>
                                </div>
                              </div>
                           
                            </div>
                            <p class="content-media fw-light m-0 pt-0" >
                                ศูนย์บริการรถเช่านครศรีธรรมราช มาตรฐานที่ลูกค้าบอกต่อมากที่สุดในจังหวัดนครศรีธรรมราช รับและคืนรถได้ที่สนามบิน และตัวเมือง ลูกค้าที่เคยใช้บริการเป็นเวลายาวนาน เรามีโปรแกรมส่วนลดคุ้มสุดๆ
                            </p>
                            </div>
                            <div class="rounded-3 w-100 ps-2 pe-2 d-flex overflow-hidden order-lg-2 order-1" style="height:220px;">
                                <div class="splide h-100" ref="splide">
                                    <div class="splide__track h-100">
                                        <ul class="splide__list h-100">
                                            <li v-for="image in images" :key="image" class="splide__slide ">
                                                <nuxt-img :src="image" alt="Slide Image" height="220px" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    
                        
                        <div class="col-lg-6 col-12 p-0 pt-0" >
                          <div class="h-100 p-2 ps-3 pe-3">
                            <div class="car-select-box row border p-1 pb-2 rounded-3 border-light bg-light ps-0 pe-0 " style="font-size:0.9em;">
                                <div class="col-6">
                                    <span  style="padding-left:2px;">รับรถที่จังหวัด</span>
                                    <div class="border rounded-3 p-2 bg-dark text-primary" style="margin-top:2px;">
                                        นครศรีธรรมราช
                                    </div>
                                </div>
                                <div class="col-3">
                                    <span style="padding-left:2px;">วันที่รับรถ</span>
                                    <div class="border rounded-3 p-2 bg-dark text-primary" style="margin-top:2px;">14 ม.ย.</div>
                                </div>
                                <div class="col-3">
                                    <span style="padding-left:2px;">วันที่คืนรถ</span>
                                    <div class="border rounded-3 p-2 bg-dark text-primary" style="margin-top:2px;">18 ม.ย.</div>
                                </div>
                            </div>

                            <div class="car-zone-box row mt-2">
                                <div class="col-6 ps-0">
                                    <div class=" rounded-3"> 
                                        <nuxt-img src="images/car/car1.png" class="w-100"/>
                                    </div>
                                </div>
                                <div class="col-6 pe-0">
                                    <div class=" rounded-3"> 
                                        <nuxt-img src="images/car/car1.png" class="w-100"/>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-6 p-0">
                                    <div class=" rounded-3"> 
                                        <nuxt-img src="images/car/car1.png" class="w-100"/>
                                    </div>
                                </div>
                                <div class="col-lg-4  col-6 p-0">
                                    <div class=" rounded-3"> 
                                        <nuxt-img src="images/car/car1.png" class="w-100"/>
                                    </div>
                                </div>
                                <div class="col-lg-4  col-6 p-0">
                                    <div class=" rounded-3"> 
                                        <nuxt-img src="images/car/car1.png" class="w-100"/>
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
.h1-media{
    font-size:2.3em;
    line-height:40px;
}
.content-media{
    font-size:1.3em;
    line-height:30px;
}
.bg-carpluz-light {
    background: #F1EFE7 !important;
}

.main_logo {
    width: 350px;
}

.max-w-1240 {
    max-width: 1240px;
}
.content-wrapper {
    max-width: 1240px;
    max-height: 697px;
    height: 100%;
}
.media-container{
    padding:18px;
}



@media (max-width: 768px) {
    .main_logo {
        width: 220px;
    }
    .page-container {
        align-items: flex-start;
        padding: 0;
    }
    .content-wrapper {
        height: 83.5vh;
    }
    .responsive-box {
        padding: 7px;
    }
    .content-1 {
        font-size: 0.7em;
    }
    .media-container{
        padding:5px;
    }
    .car-zone-box{
        padding:0;
    }
    .car-select-box{
        margin :0;
    }


}

@media (max-width: 480px) {
    .h1-media{
    font-size:1.8em;
    line-height:35px;
}
.content-media{
    font-size:1.2em;
    line-height:25px;
}
    .main_logo {
        width: 220px;
    }
    .car-zone-box{
        padding:0;
    }
    .car-select-box{
        margin :0;
    }



}



.splide {
  width: 100%;
  margin: auto;
}
.splide__slide {
  background: white;
  text-align: center;
}




</style>
