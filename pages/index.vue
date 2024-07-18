<script setup>
definePageMeta({
    layout: 'main',
});
</script>

<template>
    <div class="page-container p-1">
        <div class="content-wrapper">
                <div class="responsive-box bg-carpluz-light rounded-2" style=" border: 1px solid #ccc;">
                    <div class="w-100 h-100">
                                 <nuxt-img src="images/logo/logo_white.png" class="main_logo" />
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