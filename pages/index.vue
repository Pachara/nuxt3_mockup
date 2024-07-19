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
    <div class="page-container p-1">
        <div class="content-wrapper">
            <div class="responsive-box bg-carpluz-light rounded-3" style="border: 2px solid #555;">
                <div class="w-100 h-100">
                    <div class="row">
                        <div class="c1 col-lg-4 col-6 mb-2 order-1 order-lg-1">
                            <nuxt-img src="images/logo/logo_white.png" class="main_logo" />
                        </div>
                        <div class="c2 col-lg-3 col-6 mb-2 ps-2 pe-2 d-flex align-items-center justify-content-end order-2 order-lg-3 fw-normal">
                           
                        </div>
                        <div class="c3 col-lg-5 col-12 ps-2 pe-2 d-flex align-items-center justify-content-start order-3 order-lg-2">
                            <Marquee :images="randomImages"/>
                        </div>
                    </div>
                    <div class="row content-1">
                        <div class="col-lg-6 col-12 p-3">
                            <h1 class="mt-4 fw-bold" style="font-size:3em;line-height:60px;">บริการรถยนต์ให้เช่า <br/>ระดับพรีเมี่ยม</h1>
                            <p>รถเช่านครศรีธรรมราช</p>
                            <p class="fw-light" style="font-size:1.3em;line-height:30px;">ศูนย์บริการรถเช่านครศรีธรรมราช มาตรฐานที่ลูกค้าบอกต่อมากที่สุดในจังหวัดนครศรีธรรมราช รับและคืนรถได้ที่สนามบิน และตัวเมือง ลูกค้าที่เคยใช้บริการเป็นเวลายาวนาน เรามีโปรแกรมส่วนลดคุ้มสุดๆ ไว้คอยให้บริการ โปรดสอบถามข้อมูลที่คอลเซ็นเตอร์</p>
                        </div>
                        <div class="col-6"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
}

.content-wrapper {
    width: 100%;
    max-width: 1240px;
    height: 100%;
    max-height: 697px;
    display: flex;
    flex-direction: column;
}

.responsive-box {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    box-sizing: border-box;
    padding:20px;
}

.bg-carpluz-light {
    background: #F1EFE7 !important;
}

.main_logo {
    width: 350px;
}

.stat{
    font-size:1.2em;
}



@media (max-width: 768px) {
    .stat{
        font-size:1em;
    }
    .page-container {
        align-items: flex-start;
        padding: 0;
    }

    .content-wrapper {
        height: 83.5vh;
    }

    .main_logo {
        width: 220px;
    }

    .responsive-box{
        padding:7px;
    }
    .content-1{
        font-size:0.7em;
    }

}

@media (max-width: 480px) {
    .main_logo {
        width: 220px;
    }
}

</style>