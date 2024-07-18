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
            <div class="responsive-box bg-carpluz-light rounded-2" style="border: 1px solid #ccc;">
                <div class="w-100 h-100">
                    <div class="row">
                        <div class="c1 col-lg-3 col-6 mb-2 order-1 order-lg-1">
                            <nuxt-img src="images/logo/logo_white.png" class="main_logo" />
                        </div>
                        <div class="c2 col-lg-3 col-6 mb-2 d-flex align-items-center justify-content-center fw-bold order-2 order-lg-3">
                          
                        </div>
                        <div class="c3 col-lg-6 col-12 d-flex align-items-center justify-content-start order-3 order-lg-2">
                            <Marquee :images="randomImages"/>
                        </div>
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
}

.bg-carpluz-light {
    background: #F1EFE7 !important;
}

.main_logo {
    width: 300px;
}





@media (max-width: 768px) {
    .page-container {
        align-items: flex-start;
        padding: 0;
    }

    .content-wrapper {
        height: 83.5vh;
    }

    .main_logo {
        width: 200px;
    }

}

@media (max-width: 480px) {
    .main_logo {
        width: 200px;
    }
}

</style>