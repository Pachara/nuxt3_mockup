
<script setup>
const props = defineProps({
  images: Object,
});
const marqueeRef = ref(null);
let animationId = null;

const animate = () => {
    if (!marqueeRef.value) return;
    
    const marquee = marqueeRef.value;
    marquee.scrollLeft += 1;
    
    if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
        marquee.scrollLeft = 0;
    }
    
    animationId = requestAnimationFrame(animate);
};

onMounted(() => {
    animationId = requestAnimationFrame(animate);
});

onUnmounted(() => {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
});
</script>
<template>
<div class="marquee_container rounded-5 border" ref="marqueeRef" style="border:1px  solid #ddd !important">
    <div class="marquee">
        <div v-for="(image, i) in props.images" :key="i" class="img1">
            <nuxt-img :src="image" class="rounded-circle border user-image" />
        </div>
    </div>
    <div class="marquee">
        <div v-for="(image, i) in props.images" :key="`duplicate-${i}`" class="img1">
            <nuxt-img :src="image" class="rounded-circle border user-image" />
        </div>
    </div>
</div>
</template>
<style scoped>

.marquee_container {
    width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
}

.marquee {
    display: inline-block;
}

.img1 {
    display: inline-block;
    margin-right: 3px;
}

.user-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.custom-row {
    display: flex;
    flex-wrap: wrap;
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

    .user-image {
        width: 40px;
        height: 40px;
    }

    .img1 {
        margin-right: 2px;
    }
}

@media (max-width: 480px) {
    .main_logo {
        width: 200px;
    }

    .user-image {
        width: 30px;
        height: 30px;
    }

    .img1 {
        margin-right: 1px;
    }
}
</style>