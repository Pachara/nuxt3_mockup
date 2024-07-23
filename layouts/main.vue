<script setup>

</script>
<template>
    
    <div class="scrollbar-hidden">
        <NuxtPage />
    </div>

</template>
<style>
html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal scrolling */
}

.scroll-container {
    width: 100vw; /* Full viewport width */
    height: 100vh; /* Full viewport height */
    overflow-y: auto; /* Allow vertical scrolling */
    overflow-x: hidden; /* Prevent horizontal scrolling */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scroll-container::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scroll-container {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>