<script setup>
import CustomerReview from '~/components/contents/CustomerReview.vue';


definePageMeta({
  layout: 'main',
});
</script>

<template>
  <div>
    <LazyContentsMain />


    <CustomerReview />
    

    <LazyContentsHowToRent2 />
  </div>
</template>

<style scoped>

</style>
