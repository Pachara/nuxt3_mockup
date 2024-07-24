<script setup>

definePageMeta({
  layout: 'main',
});
</script>

<template>
  <div>
    <ContentsMain />

    <div class="text-center fw-light p-4 sriracha" style="font-size: 2.5em;">
      "เช่ารถ เรื่องง่าย"
    </div>
    
    <ContentsHowToRent />
  </div>
</template>

<style scoped>
.sriracha {
  font-family: 'Sriracha', cursive;
}
</style>
