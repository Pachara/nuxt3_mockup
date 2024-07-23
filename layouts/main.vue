<script setup>

</script>
<template>
    
    <div class="scrollbar-hidden">
        <NuxtPage />
    </div>

</template>
<style scoped>
/* Apply this to hide scrollbars on all elements */
.scrollbar-hidden {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

/* WebKit and Blink (Chrome, Safari, newer versions of Opera) */
.scrollbar-hidden::-webkit-scrollbar {
    display: none;
}

/* Ensure the body also doesn't show scrollbars */
body {
    overflow: hidden;
}

/* Optional: If you want to allow scrolling on the main content */
.scrollbar-hidden {
    overflow-y: auto;
    height: 100vh;
}
</style>