<script setup>

</script>

<template>
  <div class="d-flex justify-content-center my-4 background py-4">
    <div class="row d-flex justify-content-center set-max-width ">
        <div class="col-12 text-center fs-1 fw-bold">
          12,000+ Positive Customer Reviews Guarantee
        </div>
        <div class="col-md-8 col-12 d-flex align-items-center justify-content-center pt-4">
          <CustomerAnimation />
        </div>
        <div class="col-md-4 col-12 ps-2 pe-2 d-flex justify-content-center align-items-center py-4 pt-5" >
          <div class="overflow-hidden w-100" style="height:320px;">
            <HeroVerticalSlider />
          </div>
          <!-- <LazyCustomerRating /> -->
        </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url('/images/bg/bg1.png');
  background-size: cover; /* Make the background image cover the entire div */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Do not repeat the background image */
  width: 100%; /* Ensure the div takes full width */
  height: auto; /* Adjust the height as necessary */
}
.set-max-width {
  max-width: 1180px;
}
</style>
