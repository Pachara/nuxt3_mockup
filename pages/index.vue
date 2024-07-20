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
                            <Marquee :images="randomImages"/>
                        </div>
                    </div>
                    
                    <div class="row flex-grow-1">
                        <div class="col-lg-6 col-12 p-2 order-lg-1 order-2">
                            <div class=" rounded-3 w-100 p-3 " >
                            <h1 class="h1-media fw-bold">เจ้าฟ้า คาร์เร้น <br/>จังหวัดนครศรีธรรมราช</h1>
                            <p class="keyword-media fw-light">#รถเช่านครศรีธรรมราช #รถเช่าสนามบิน</p>
                            <p class="content-media fw-light" >ศูนย์บริการรถเช่านครศรีธรรมราช มาตรฐานที่ลูกค้าบอกต่อมากที่สุดในจังหวัดนครศรีธรรมราช รับและคืนรถได้ที่สนามบิน และตัวเมือง ลูกค้าที่เคยใช้บริการเป็นเวลายาวนาน เรามีโปรแกรมส่วนลดคุ้มสุดๆ</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12 p-2 order-lg-1 order-3 ">
                            <div class="border rounded-3 w-100" style="height:250px;"> &nbsp;</div>
                        </div>
                        <div class="col-lg-6 col-12 p-2 order-lg-1 order-1" >
                            <div class="bg-white rounded-3 w-100 p-0 d-flex overflow-hidden" style="height:250px;">
                                <nuxt-img src="/images/slideshow/1.JPG" height="250px"/>
                                <nuxt-img src="/images/slideshow/2.JPG" height="250px"/>
                                <nuxt-img src="/images/slideshow/3.JPG" height="250px"/>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12 p-2 order-lg-1 order-4">
                            <div class="row">
                                <div class="col-6">
                                    <div class="border rounded-3 w-100" style="height:250px;"> &nbsp;</div>
                                </div>
                                <div class="col-6">
                                    <div class="border rounded-3 w-100" style="height:250px;"> &nbsp;</div>
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

}
</style>
